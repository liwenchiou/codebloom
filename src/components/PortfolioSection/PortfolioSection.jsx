import React, { useState } from "react";
import "./PortfolioSection.scss";

// Images
import webDesignImg from "../../assets/images/index/web-design-project.png";
import bankingImg from "../../assets/images/index/banking-app.png";
import musicAppImg from "../../assets/images/index/music-player-app.png";
import taskMgmtImg from "../../assets/images/index/task-management.png";
import blogImg from "../../assets/images/index/blog-landing-page.png";
import rankGoldImg from "../../assets/images/index/rank-1-gold.png";
import rankSilverImg from "../../assets/images/index/rank-2-silver.png";
import avatarChen from "../../assets/images/index/avatar-chen.png";
import avatarSarah from "../../assets/images/index/avatar-sarah.png";
import avatarYang from "../../assets/images/index/avatar-yang.png";
import avatarOliver from "../../assets/images/index/avatar-oliver.png";
import avatarLin from "../../assets/images/index/avatar-lin.png";
import arrowIcon from "../../assets/images/index/arrow_triangle_right.png";

// 模擬數據
const popularList = [
  {
    id: 1,
    title: "TravelMates 旅伴媒合平台",
    image: webDesignImg,
    author: "陳冠宇",
    avatar: avatarChen,
    tags: ["React", "Node.js", "Google Maps API"],
    rank: 1,
  },
  {
    id: 2,
    title: "FinanceGo- 智慧理財儀表板",
    image: bankingImg,
    author: "Sarah Smith",
    avatar: avatarSarah,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    rank: 2,
  },
];

const latestList = [
  {
    id: 3,
    title: "Vue3 極簡音樂播放器",
    image: musicAppImg,
    author: "楊子萱",
    avatar: avatarYang,
    tags: ["Vue3", "SCSS"],
  },
  {
    id: 4,
    title: "React 拖曳式看板",
    image: taskMgmtImg,
    author: "Oliver Brown",
    avatar: avatarOliver,
    tags: ["React", "TypeScript", "Zustand"],
  },
  {
    id: 5,
    title: "Next.js 響應式部落格模板",
    image: blogImg,
    author: "林雅婷",
    avatar: avatarLin,
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
  },
];

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
        className={`position-relative rounded-4 overflow-hidden shadow-sm ${
          data.rank ? "img-wrapper" : ""
        }`}
      >
        <img
          src={data.image}
          className="w-100 object-fit-cover"
          alt={data.title}
        />

        {/* 排名徽章 */}
        {data.rank && (
          <div className="position-absolute top-0 start-0 m-3 z-2">
            <img
              src={data.rank === 1 ? rankGoldImg : rankSilverImg}
              alt={`Rank ${data.rank}`}
              className="rank-badge"
            />
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
              transform: `translateY(0.5px) ${
                isAnimating ? "scale(1.3)" : "scale(1)"
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
            <img
              src={data.avatar}
              alt={data.author}
              className="rounded-circle object-fit-cover shadow-sm avatar-img"
            />
            <span className="text-neutral-200 author-name">{data.author}</span>
          </div>
        </div>
        <div className="d-flex flex-wrap tags-row">
          {data.tags.map((tag, i) => (
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
  return (
    <section className="portfolio-section">
      <div className="container">
        {/* 熱門作品 */}
        <div className="d-flex justify-content-between align-items-center mb-64px">
          <h2 className="glow-title m-0 text-fw-700 text-primary-50">
            熱門作品
          </h2>

          <a href="/popular" className="view-more-btn text-decoration-none p-0">
            查看更多
            <img src={arrowIcon} alt="arrow" width="5" />
          </a>
        </div>

        <div className="row g-4 mb-96px">
          {popularList.map((item) => (
            <div key={item.id} className="col-12 col-md-6">
              <ProjectCard data={item} />
            </div>
          ))}
        </div>

        {/* 最新作品 */}
        <div className="d-flex justify-content-between align-items-center mb-64px">
          <h2 className="glow-title m-0 text-fw-700 text-primary-50">
            最新作品
          </h2>

          <a href="/latest" className="view-more-btn text-decoration-none p-0">
            查看更多
            <img src={arrowIcon} alt="arrow" width="5" />
          </a>
        </div>

        <div className="row g-4">
          {latestList.map((item) => (
            <div key={item.id} className="col-12 col-md-4">
              <ProjectCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
