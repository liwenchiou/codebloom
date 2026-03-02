import React from "react";
import { Link } from "react-router-dom";
import "./ArticleSection.scss";

import articleImg1 from "../../assets/images/index/article1.jpg";
import articleImg2 from "../../assets/images/index/article2.jpg";
import articleImg3 from "../../assets/images/index/article3.jpg";
import articleImg4 from "../../assets/images/index/article4.jpg";
import avatarYang from "../../assets/images/index/article_yang.png";
import avatarChen from "../../assets/images/index/article_chen.png";
import avatarLin from "../../assets/images/index/article_lin.png";
import avatarSharon from "../../assets/images/index/article_sharon.png";
import articleDecoration from "../../assets/images/index/article_decoration_1.png";
import arrowIcon from "../../assets/images/index/arrow_triangle_right.png";

const articles = [
  {
    id: 1,
    title: "告別 Vuex！為什麼 Pinia 是 Vue 3 的最佳狀態管理工具？",
    desc: "Vue 官方推薦的新選擇。本文將帶你了解 Pinia 棄用 Mutations 的原因，以及如何從 Vuex 無痛遷移到更直覺的 Pinia Store。",
    date: "2025-12-01",
    views: "14.5k",
    author: "楊子萱",
    avatar: avatarYang,
    image: articleImg1,
  },
  {
    id: 2,
    title: "React 效能優化指南：使用 useMemo 和 useCallback 的正確時機",
    desc: "深入探討渲染機制，避免過度優化導致的程式碼維護災難。了解何時該用 memoization，何時該放手。",
    date: "2025-12-02",
    views: "12.1k",
    author: "陳冠宇",
    avatar: avatarChen,
    image: articleImg2,
  },
  {
    id: 3,
    title: "愛恨交織的 Tailwind CSS：從抗拒到真香的實戰心得",
    desc: "還在用 Flexbox 解決所有排版問題嗎？學會區分一維與二維佈局的差異，讓你在處理複雜的 RWD 網格時事半功倍。",
    date: "2025-12-07",
    views: "4.7k",
    author: "林雅婷",
    avatar: avatarLin,
    image: articleImg3,
  },
  {
    id: 4,
    title: "那些面試官最愛問的 JavaScript 陷阱",
    desc: "整理了今年最常見的面試題本，包含 閉包 (Closure)、非同步處理 (Async/Await) 以及原型鏈 (Prototype Chain) 的經典題型解析。",
    date: "2025-12-09",
    views: "3.5k",
    author: "Sharon Wang",
    avatar: avatarSharon,
    image: articleImg4,
  },
];

const ArticleCard = ({ data }) => {
  return (
    <div className="article-card card overflow-hidden">
      <div className="d-flex flex-column flex-md-row h-100">
        {/* 左側圖片 */}
        <div className="img-box position-relative">
          <img
            src={data.image}
            alt={data.title}
            className="w-100 h-100 object-fit-cover"
          />
          <div className="img-overlay"></div>
        </div>

        <div className="content-box d-flex flex-column justify-content-center p-3">
          <h5 className="article-title text-fw-700 mb-2 line-clamp-2">
            {data.title}
          </h5>

          <p className="article-desc text-neutral-300 mb-2 line-clamp-2">
            {data.desc}
          </p>

          <div className="mt-auto d-flex align-items-center justify-content-between flex-wrap gap-2 text-neutral-400 small">
            <div className="d-flex align-items-center gap-3 meta-info">
              <span className="d-flex align-items-center gap-1">
                <i className="bi bi-clock"></i>
                {data.date}
              </span>
              <span className="d-flex align-items-center gap-1">
                <i className="bi bi-eye"></i>
                {data.views}
              </span>
            </div>

            <div className="d-flex align-items-center author-box">
              <img
                src={data.avatar}
                alt={data.author}
                className="rounded-circle object-fit-cover shadow-sm avatar-img"
              />
              <span className="text-neutral-200 author-name">
                {data.author}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArticleSection = () => {
  return (
    <section className="article-section">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-64px">
          <div className="position-relative d-inline-block">
            <img
              src={articleDecoration}
              className="article-decoration-1"
              alt=""
            />
            <h2 className="glow-title m-0 text-fw-700 text-primary-50">
              技術文章
            </h2>
          </div>

          {/* <a
            href="/articles"
            className="view-more-btn text-decoration-none p-0"
          >
            查看更多
            <img src={arrowIcon} alt="arrow" width="5" />
          </a> */}
          <Link
            className="view-more-btn text-decoration-none p-0"
            to="/Articles"
          >
            查看更多
            <img src={arrowIcon} alt="arrow" width="5" />
          </Link>
        </div>

        <div className="row article-grid">
          {articles.map((article) => (
            <div key={article.id} className="col-12 col-lg-6">
              <ArticleCard data={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
