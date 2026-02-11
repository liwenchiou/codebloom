import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { createHashRouter, RouterProvider } from 'react-router'
import routes from './components/routes/index.jsx'
const router = createHashRouter(routes)
// 套件導入
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css'
//樣式導入
import "./main.scss";

//模組導入
// import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
  // <StrictMode>
  //   <HashRouter> {/* 在最外層定義一次即可 */}
  //     <App />
  //   </HashRouter>
  // </StrictMode>
);
