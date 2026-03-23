import React from "react";
import ArticleListPage from "../components/ArticleList/ArticleListPage";

export default function Articles() {
  return (
    // 這裡直接渲染 ArticleListPage 元件
    // 如果你有全域的 Navbar 或 Footer，通常會在 Layout 層處理，或者包在這裡
    <>
      <ArticleListPage />
    </>
  );
}
