import { createRoot, hydrateRoot } from "react-dom/client";
import FaqPage from "./FaqPage";
import "./styles.css";

const root = document.getElementById("root");
if (root.firstElementChild) {
  hydrateRoot(root, <FaqPage />);
} else {
  createRoot(root).render(<FaqPage />);
}
