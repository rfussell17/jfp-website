import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      // In dev, serve the separate pages at /faq and /testimonials like Netlify does.
      name: "faq-route",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === "/faq" || req.url === "/testimonials") req.url = `${req.url}.html`;
          next();
        });
      },
    },
  ],
  publicDir: "static",
  build: {
    outDir: "build",
    rollupOptions: { input: { main: "index.html", faq: "faq.html", testimonials: "testimonials.html" } },
  },
  server: { port: 3000, open: true },
});
