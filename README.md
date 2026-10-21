# Jonny Fussell Photography

Wedding photography site built with React + Vite: a one-page home site plus two
separate pages (`/faq` and `/testimonials`). All pages are pre-rendered at build time, so
search engines and link previews see the real content.

## Commands

- `npm run dev` – local dev server
- `npm run build` – production build into `build/` (includes pre-rendering)
- `npm run preview` – serve the production build locally

Needs Node 20.19+ (see `.nvmrc`). Netlify settings live in `netlify.toml`.

## Adding photos to "Recent work"

1. Create a new folder in `src/assets/recent-work/` named for the batch date,
   e.g. `2027-02`.
2. Drop the photos in. Wedding photos only. Resize them first, about 1800px on
   the long edge, saved as JPEG at quality ~80, to keep the page fast. The full
   size originals are far too big to put in the repo.
3. (Optional) Add a short description of each photo to
   `src/data/gallery-alt.json`, keyed like `"2027-02/01.jpg"`. It is used as the
   image alt text for accessibility and SEO. Photos without one get a generic
   description.
4. Commit and push.

The gallery shuffles every photo together in a fixed order and loads more as you
scroll. The contact form appears once the last photo has loaded (or when someone
clicks Inquire). To get a different mix, change the seed in
`src/components/Gallery.jsx`.

## Editing text, prices and testimonials

All of it lives in `src/data/site.js`.

## Inquiry form

Submissions are handled by Netlify Forms (form name `inquiry`). Set up email
notifications in Netlify under Forms → Form notifications.

## Social share preview

`static/og-image.jpg` is the image shown when the link is shared.
Absolute URLs for it are built from Netlify's `URL` environment variable.

## Other files

- `static/` is what gets published as-is: favicons, `og-image.jpg`, logo files,
  `manifest.webmanifest`, the 404 page and a `_headers` file.
- `brand/` holds the original logo files (dark and light). Not published.
- `src/assets/hero.webp` and `src/assets/jonny.webp` are the home page photos.
- Preview deploys and branch deploys are marked "noindex" automatically; only
  the production deploy can be indexed.
