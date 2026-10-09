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

const Gallery = () => (
  <section className="section gallery" id="recent-work">
    <div className="container">
      <h2 className="section__title">Recent work</h2>
    </div>
    <ul className="gallery__grid">
      {photos.map((p, i) => (
        <li
          key={p.key}
          className="gallery__item"
          style={{ "--ratio": p.w / p.h }}
        >
          <img
            src={p.src}
            width={p.w}
            height={p.h}
            alt={p.alt}
            loading={i < 2 ? "eager" : "lazy"}
            decoding="async"
          />
        </li>
      ))}
    </ul>
  </section>
);

export default Gallery;
