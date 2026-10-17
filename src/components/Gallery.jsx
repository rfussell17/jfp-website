import { useEffect, useRef, useState } from "react";
import sizes from "../data/gallery-sizes.json";
import alts from "../data/gallery-alt.json";
import { srcSet } from "../images";

// Every photo dropped into src/assets/recent-work/<batch>/ shows up here,
// shuffled together so shoots and portrait/landscape shots are mixed.
const files = import.meta.glob("../assets/recent-work/*/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const photos = Object.entries(files)
  .map(([path, src]) => {
    const key = path.split("recent-work/")[1];
    const [w, h] = sizes[key] || [3, 2];
    return {
      key,
      src,
      srcSet: srcSet(`recent-work/${key.replace(/\.[^.]+$/, "")}`),
      w,
      h,
      alt: alts[key] || "Documentary wedding photograph by Jonny Fussell, Kelowna, BC",
    };
  })
  .sort((a, b) => {
    const [batchA, fileA] = a.key.split("/");
    const [batchB, fileB] = b.key.split("/");
    return batchB.localeCompare(batchA) || fileA.localeCompare(fileB, undefined, { numeric: true });
  });

// Shuffle with a fixed seed: the order looks random but is the same every load,
// so the server render and the browser agree. Change the seed for a new mix.
const seeded = (seed) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const random = seeded(7);
for (let i = photos.length - 1; i > 0; i--) {
  const j = Math.floor(random() * (i + 1));
  [photos[i], photos[j]] = [photos[j], photos[i]];
}

const GAP = 4;
const MIN_WIDTH = 600; // below this the gallery is a single column of big photos
const FIRST_ROWS = 4; // rows shown at first
const MORE_ROWS = 3; // rows added each time you near the bottom
const FLAT_COUNT = 24; // photos in the server-rendered, no-JS version
const ratios = photos.map((p) => p.w / p.h);

// Splits every photo into rows so that each row, the last included, fills the
// full width. Picks the break points that keep all rows closest to the
// target height. The whole set is laid out once and then revealed row by row,
// so rows already on screen never reshuffle as more arrive.
const layoutRows = (width) => {
  if (width < MIN_WIDTH) return photos.map((p) => [p]);
  const target = width < 900 ? 170 : 300;
  const total = ratios.reduce((a, b) => a + b, 0);
  const count = ratios.length;
  const rowCount = Math.min(count, Math.max(1, Math.round((total * target) / width)));

  const prefix = [0];
  ratios.forEach((r) => prefix.push(prefix[prefix.length - 1] + r));
  const cost = (i, j) => {
    const height = (width - GAP * (j - i - 1)) / (prefix[j] - prefix[i]);
    return (height - target) ** 2;
  };

  // best[k][j]: lowest cost of laying out the first j photos in k rows
  const best = Array.from({ length: rowCount + 1 }, () => Array(count + 1).fill(Infinity));
  const from = Array.from({ length: rowCount + 1 }, () => Array(count + 1).fill(0));
  best[0][0] = 0;
  for (let k = 1; k <= rowCount; k++) {
    for (let j = k; j <= count; j++) {
      for (let i = k - 1; i < j; i++) {
        const c = best[k - 1][i] + cost(i, j);
        if (c < best[k][j]) {
          best[k][j] = c;
          from[k][j] = i;
        }
      }
    }
  }

  const rows = [];
  for (let k = rowCount, j = count; k > 0; k--) {
    const i = from[k][j];
    rows.unshift(photos.slice(i, j));
    j = i;
  }
  return rows;
};

// A row fades and rises into place the first time it scrolls into view.
const Row = ({ children }) => {
  const el = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={el} className={`gallery__row${seen ? " gallery__row--in" : ""}`}>
      {children}
    </div>
  );
};

// Tells the browser how wide the photo will show, so it fetches a matching
// size: the full width on phones, and the row height times the photo's shape
// on larger screens (the row heights are the two targets in layoutRows).
const sizesFor = (photo) => {
  const ratio = photo.w / photo.h;
  return `(max-width: 599px) 100vw, (max-width: 899px) ${Math.round(170 * ratio)}px, ${Math.round(300 * ratio)}px`;
};

const Photo = ({ photo }) => (
  <div className="gallery__item" style={{ "--ratio": photo.w / photo.h }}>
    <img
      src={photo.src}
      srcSet={photo.srcSet}
      sizes={photo.srcSet ? sizesFor(photo) : undefined}
      width={photo.w}
      height={photo.h}
      alt={photo.alt}
      loading="lazy"
      decoding="async"
    />
  </div>
);

// Endless-scroll gallery: more rows load as you near the bottom. When the last
// photo is in, onDone tells the page to show the contact form; `done` (set
// when someone jumps straight to the form) loads everything at once.
const Gallery = ({ done, onDone }) => {
  const ref = useRef(null);
  const sentinel = useRef(null);
  // null = plain CSS layout (server render, no JS); otherwise the rows.
  const [rows, setRows] = useState(null);
  const [shown, setShown] = useState(FIRST_ROWS);

  useEffect(() => {
    const el = ref.current;
    let frame;
    const update = () => setRows(layoutRows(el.clientWidth));
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    });
    observer.observe(el);
    update();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const visible = rows ? (done ? rows.length : Math.min(shown, rows.length)) : 0;
  const finished = rows && visible >= rows.length;

  useEffect(() => {
    if (finished) onDone();
  }, [finished]);

  useEffect(() => {
    if (!rows || finished) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShown((n) => n + MORE_ROWS),
      { rootMargin: "1200px 0px" }
    );
    observer.observe(sentinel.current);
    return () => observer.disconnect();
  }, [rows, shown, finished]);

  return (
    <section className="section gallery" id="recent-work">
      <div className="container">
        <h2 className="section__title">Recent work</h2>
      </div>
      <div ref={ref}>
        {rows ? (
          <div className="gallery__rows">
            {rows.slice(0, visible).map((row) => (
              <Row key={row[0].key}>
                {row.map((p) => (
                  <Photo key={p.key} photo={p} />
                ))}
              </Row>
            ))}
          </div>
        ) : (
          <div className="gallery__grid">
            {photos.slice(0, FLAT_COUNT).map((p, i) => (
              <Photo key={p.key} photo={p} />
            ))}
          </div>
        )}
        <div ref={sentinel} className="gallery__end" />
      </div>
    </section>
  );
};

export default Gallery;
