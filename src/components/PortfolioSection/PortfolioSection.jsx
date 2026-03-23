import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./PortfolioSection.scss";

// Images
import rankGoldImg from "../../assets/images/index/rank-1-gold.png";
import rankSilverImg from "../../assets/images/index/rank-2-silver.png";
import arrowIcon from "../../assets/images/index/arrow_triangle_right.png";

const API_BASE = import.meta.env.VITE_API_BASE;

const ProjectCard = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 120);
  };

  return (
    <div className="card border-0 bg-transparent h-100">
      <div
        className={`position-relative rounded-4 overflow-hidden shadow-sm ${data.rank ? "img-wrapper" : ""
          }`}
      >
        <img src={data.image}
          className="w-100 object-fit-cover"
          alt={data.title}
         loading="lazy" />

        {/* 排名徽章 */}
        {data.rank && (
          <div className="position-absolute top-0 start-0 m-3 z-2">
            <img src={data.rank === 1 ? rankGoldImg : rankSilverImg}
              alt={`Rank ${data.rank}`}
              className="rank-badge"
             loading="lazy" />
          </div>
        )}

        {/* 愛心按鈕 */}
        <button
          onClick={handleClick}
          className="position-absolute top-0 end-0 m-3 btn-heart rounded-circle text-white"
          aria-label={isLiked ? "Unlike" : "Like"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isLiked ? "#ED4D4D" : "none"}
            stroke={isLiked ? "#ED4D4D" : "currentColor"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              transform: `translateY(0.5px) ${isAnimating ? "scale(1.3)" : "scale(1)"
                }`,

              transformOrigin: "center",
            }}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      {/* ProjectInfo */}
      <div className="card-body px-0 project-info">
        <div className="d-flex justify-content-between align-items-center header-row">
          <h5 className="m-0 text-fw-700 project-title">{data.title}</h5>
          <div className="d-flex align-items-center flex-shrink-0 author-box">
            <img src={data.avatar}
              alt={data.author}
              className="rounded-circle object-fit-cover shadow-sm avatar-img"
             loading="lazy" />
            <span className="text-neutral-200 author-name">{data.author}</span>
          </div>
        </div>
        <div className="d-flex flex-wrap tags-row">
          {data.tags && data.tags.map((tag, i) => (
            <span key={i} className="cb-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const [popularList, setPopularList] = useState([]);
  const [latestList, setLatestList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_BASE}/portfolio`);
        const allData = response.data;

        // 篩選熱門作品
        // 優先找有 rank 的，如果沒有 rank 則按點讚數或瀏覽量排序
        let popular = allData.filter((item) => item.rank);

        if (popular.length === 0) {
          // 如果 API 沒給 rank，我們按點讚數排序取前兩個
          popular = [...allData]
            .sort((a, b) => (b.likes || 0) - (a.likes || 0))
            .slice(0, 2);
        } else {
          popular = popular.sort((a, b) => a.rank - b.rank).slice(0, 2);
        }

        // 篩選最新作品 (取 ID 較大或後面的 3 個，排除掉已經在熱門中的)
        const popularIds = popular.map((p) => p.id);
        const latest = allData
          .filter((item) => !popularIds.includes(item.id))
          .sort((a, b) => b.id - a.id)
          .slice(0, 3);

        setPopularList(popular);
        setLatestList(latest);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (isLoading) {
    return (
      <section className="portfolio-section d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  return (
    <section className="portfolio-section">
      <div className="container">
        {/* 熱門作品 */}
        <div className="d-flex justify-content-between align-items-center mb-64px">
          <h2 className="glow-title m-0 text-fw-700 text-primary-50">
            熱門作品
          </h2>

          {/* <a href="/Projects" className="view-more-btn text-decoration-none p-0">
            查看更多
            <img src={arrowIcon} alt="arrow" width="5"  loading="lazy" />
          </a> */}

          <Link
            className="view-more-btn text-decoration-none p-0"
            to="/Projects"
          >
            查看更多
            <img src={arrowIcon} alt="arrow" width="5"  loading="lazy" />
          </Link>
        </div>

        <div className="row g-4 mb-96px">
          {popularList.map((item) => (
            <div key={item.id} className="col-md-6">
              <ProjectCard data={item} />
            </div>
          ))}
        </div>

        {/* 最新作品 */}
        <div className="d-flex justify-content-between align-items-center mb-64px">
          <h2 className="glow-title m-0 text-fw-700 text-primary-50">
            最新作品
          </h2>

          {/* <a href="/latest" className="view-more-btn text-decoration-none p-0">
            查看更多
            <img src={arrowIcon} alt="arrow" width="5"  loading="lazy" />
          </a> */}
          <Link
            className="view-more-btn text-decoration-none p-0"
            to="/Projects"
          >
            查看更多
            <img src={arrowIcon} alt="arrow" width="5"  loading="lazy" />
          </Link>
        </div>

        <div className="row g-4">
          {latestList.map((item) => (
            <div key={item.id} className="col-md-4">
              <ProjectCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
