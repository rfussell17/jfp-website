import { createRoot, hydrateRoot } from "react-dom/client";
import TestimonialsPage from "./TestimonialsPage";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "./styles.css";

const root = document.getElementById("root");
if (root.firstElementChild) {
  hydrateRoot(root, <TestimonialsPage />);
} else {
  createRoot(root).render(<TestimonialsPage />);
}
