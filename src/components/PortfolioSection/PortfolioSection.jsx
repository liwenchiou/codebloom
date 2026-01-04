import React from "react";
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
  return (
    <div className="card border-0 bg-transparent h-100">
      {/* 作品預覽圖 */}
      <div className="position-relative rounded-4 overflow-hidden shadow-sm">
        <img
          src={data.image}
          className="w-100 object-fit-cover"
          alt={data.title}
          style={{ aspectRatio: "16/10" }}
        />

        {/* 排名徽章 */}
        {data.rank && (
          <div className="position-absolute top-0 start-0 m-2">
            <img
              src={data.rank === 1 ? rankGoldImg : rankSilverImg}
              alt={`Rank ${data.rank}`}
              className="rank-badge"
            />
          </div>
        )}

        {/* 愛心按鈕 */}
        <button className="position-absolute top-0 end-0 m-3 btn-heart rounded-circle text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </button>
      </div>

      {/* 作品詳情 */}
      <div className="card-body px-0 pt-24px">
        <div className="d-flex justify-content-between align-items-center mb-8px">
          <h5 className="text-xl text-fw-700 m-0 text-neutral-500 me-12px project-title">
            {data.title}
          </h5>

          <div className="d-flex align-items-center flex-shrink-0">
            <img
              src={data.avatar}
              alt={data.author}
              className="rounded-circle object-fit-cover shadow-sm"
              width="32"
              height="32"
            />
            <span className="text-sm text-neutral-200 ms-8px">
              {data.author}
            </span>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {data.tags.map((tag, i) => (
            <span key={i} className="cb-tag mb-4px me-8px">
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
    <section className="portfolio-section py-56px">
      <div className="container">
        {/* 熱門作品 */}
        <div className="d-flex justify-content-between align-items-end mb-32px">
          <h2 className="glow-title m-0 text-3xl text-fw-700 text-primary-50">
            熱門作品
          </h2>
          <a
            href="/popular"
            className="cb-btn-text text-sm text-decoration-none p-0"
          >
            查看更多
          </a>
        </div>

        <div className="row g-4 mb-56px">
          {popularList.map((item) => (
            <div key={item.id} className="col-12 col-md-6">
              <ProjectCard data={item} />
            </div>
          ))}
        </div>

        {/* 最新作品 */}
        <div className="d-flex justify-content-between align-items-end mb-32px">
          <h2 className="glow-title m-0 text-3xl text-fw-700 text-primary-50">
            最新作品
          </h2>
          <a
            href="/latest"
            className="cb-btn-text text-sm text-decoration-none p-0"
          >
            查看更多
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
