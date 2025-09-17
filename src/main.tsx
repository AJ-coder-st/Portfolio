import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Apply persisted theme before app mounts to avoid flash
const persistedTheme = localStorage.getItem("theme");
if (persistedTheme === "dark") {
  document.documentElement.classList.add("dark");
} else if (persistedTheme === "light") {
  document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
