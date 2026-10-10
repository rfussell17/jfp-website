import { useEffect, useRef, useState } from "react";
import sizes from "../data/gallery-sizes.json";
import alts from "../data/gallery-alt.json";

// Every photo dropped into src/assets/recent-work/<batch>/ shows up here.
// Newest batch folder first; photos within a batch in filename order.
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

const GAP = 4;
const MIN_WIDTH = 600; // below this the gallery is a single column of big photos
const ratios = photos.map((p) => p.w / p.h);

// Splits the photos into rows so that every row, the last one included, fills
// the full width. Picks the break points that keep all rows closest to the
// target height, so no row ends up much taller or shorter than the rest.
const layoutRows = (width) => {
  const target = width < 900 ? 170 : 230;
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

const Photo = ({ photo, index }) => (
  <div className="gallery__item" style={{ "--ratio": photo.w / photo.h }}>
    <img
      src={photo.src}
      width={photo.w}
      height={photo.h}
      alt={photo.alt}
      loading={index < 2 ? "eager" : "lazy"}
      decoding="async"
    />
  </div>
);

const Gallery = () => {
  const ref = useRef(null);
  // null = plain CSS layout (server render, no JS, phones); otherwise the rows.
  const [rows, setRows] = useState(null);

  useEffect(() => {
    const el = ref.current;
    let frame;
    const update = () => {
      const width = el.clientWidth;
      setRows(width < MIN_WIDTH ? null : layoutRows(width));
    };
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

  let index = 0;
  return (
    <section className="section gallery" id="recent-work">
      <div className="container">
        <h2 className="section__title">Recent work</h2>
      </div>
      <div ref={ref}>
        {rows ? (
          <div className="gallery__rows">
            {rows.map((row) => (
              <div className="gallery__row" key={row[0].key}>
                {row.map((p) => (
                  <Photo key={p.key} photo={p} index={index++} />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery__grid">
            {photos.map((p, i) => (
              <Photo key={p.key} photo={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
