import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// 套件導入
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//模組導入
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
