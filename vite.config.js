import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  publicDir: "static",
  build: {
    outDir: "build",
    rollupOptions: { input: { main: "index.html", faq: "faq.html" } },
  },
  server: { port: 3000, open: true },
});
