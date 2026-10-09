# Jonny Fussell Photography

One-page wedding site built with React + Vite. The page is pre-rendered at build
time, so search engines and link previews see the real content.

## Commands

- `npm run dev` – local dev server
- `npm run build` – production build into `build/` (includes pre-rendering)
- `npm run preview` – serve the production build locally

Needs Node 20.19+ (see `.nvmrc`). Netlify settings live in `netlify.toml`.

## Adding photos to "Recent work"

1. Create a new folder in `src/assets/recent-work/` named for the batch date,
   e.g. `2027-02`.
2. Drop the photos in, named `01.jpg`, `02.jpg`, … in the order they should show.
   Wedding photos only. About 1080–2000px on the long edge, saved as JPEG at
   quality ~80, keeps the page fast.
3. (Optional) Add a short description of each photo to
   `src/data/gallery-alt.json`, keyed like `"2027-02/01.jpg"`. It is used as the
   image alt text for accessibility and SEO. Photos without one get a generic
   description.
4. Commit and push. The newest folder shows first.

## Editing text, prices and testimonials

All of it lives in `src/data/site.js`.

## Inquiry form

Submissions are handled by Netlify Forms (form name `inquiry`). Set up email
notifications in Netlify under Forms → Form notifications.

## Social share preview

`static/og-image.jpg` (1200×630) is the image shown when the link is shared.
Absolute URLs for it are built from Netlify's `URL` environment variable.
