import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ArticleSection.scss";

const API_BASE = import.meta.env.VITE_API_BASE;
import articleDecoration from "../../assets/images/index/article_decoration_1.png";
import arrowIcon from "../../assets/images/index/arrow_triangle_right.png";

// 數字格式化
const formatCount = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num;
};

const ArticleCard = ({ data }) => {
  return (
    <div className="article-card card overflow-hidden">
      <div className="d-flex flex-column flex-md-row h-100">
        <div className="img-box position-relative">
          <img src={data.image}
            alt={data.title}
            className="w-100 h-100 object-fit-cover"
           loading="lazy" />
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
              <img src={data.avatar}
                alt={data.author}
                className="rounded-circle object-fit-cover shadow-sm avatar-img"
               loading="lazy" />
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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${API_BASE}/articleList`);
        const data = response.data;

        const formattedData = data.slice(0, 4).map((item) => {
          return {
            id: item.id,
            title: item.title,
            desc: item.description,
            date: item.date,
            views: formatCount(item.views),
            author: item.author,
            image: item.cover,
            avatar: item.authorAvatar,
          };
        });

        setArticles(formattedData);
      } catch (error) {
        console.error("取得首頁文章失敗:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="article-section">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-64px">
          <div className="position-relative d-inline-block">
            <img src={articleDecoration}
              className="article-decoration-1"
              alt=""
             loading="lazy" />
            <h2 className="glow-title m-0 text-fw-700 text-primary-50">
              技術文章
            </h2>
          </div>

          <Link
            className="view-more-btn text-decoration-none p-0"
            to="/Articles"
          >
            查看更多
            <img src={arrowIcon} alt="arrow" width="5"  loading="lazy" />
          </Link>
        </div>

        <div className="row article-grid">
          {articles.length > 0 ? (
            articles.map((article) => (
              <div key={article.id} className="col-lg-6">
                <ArticleCard data={article} />
              </div>
            ))
          ) : (
            <div className="text-center text-white w-100 py-4">
              載入文章中...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
