import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      // In dev, serve the questions page at /faq like Netlify does.
      name: "faq-route",
      configureServer: (server) =>
        server.middlewares.use((req, _res, next) => {
          if (req.url === "/faq") req.url = "/faq.html";
          next();
        }),
    },
  ],
  publicDir: "static",
  build: {
    outDir: "build",
    rollupOptions: { input: { main: "index.html", faq: "faq.html" } },
  },
  server: { port: 3000, open: true },
});
