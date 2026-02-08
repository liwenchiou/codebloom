import React, { useState, useRef, useEffect } from "react";
import "./ArticleListPage.scss";
import ArticleListItem from "./ArticleListItem";

import articleImg1 from "../../assets/images/index/web-design-project.png";
import avatarYang from "../../assets/images/index/avatar-yang.png";
import avatarChen from "../../assets/images/index/avatar-chen.png";
import avatarLin from "../../assets/images/index/avatar-lin.png";
import avatarSharon from "../../assets/images/article/avatarSharon.png";
import avatarSophie from "../../assets/images/article/avatarSophie.png";
import avatarLee from "../../assets/images/article/avatarLee.png";
import avatarZhang from "../../assets/images/article/avatarZhang.png";

import goldPen from "../../assets/images/article/goldpen.png";
import silverPen from "../../assets/images/article/silverpen.png";
import bronzePen from "../../assets/images/article/bronzepen.png";

const allTags = [
  "全部",
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "Sass",
  "MongoDB",
  "Vue.js",
  "Next.js",
  "DevOps",
  "UI/UX",
  "Web3",
  "AI Tools",
];

const rankIcons = {
  1: goldPen,
  2: silverPen,
  3: bronzePen,
};

const articlesData = [
  {
    id: 1,
    date: "2025-12-01",
    author: "楊子萱",
    avatar: avatarYang,
    title: "告別 Vuex！為什麼 Pinia 是 Vue 3 的最佳狀態管理工具？",
    desc: "Vue 官方推薦的新選擇。本文將帶你了解 Pinia 棄用 Mutations 的原因，以及如何從 Vuex 無痛遷移到更直覺的 Pinia Store。",
    tags: ["Vue.js", "Pinia"],
    views: "14.5k",
    likes: "11k",
    image: articleImg1,
  },
  {
    id: 2,
    date: "2025-12-02",
    author: "陳冠宇",
    avatar: avatarChen,
    title: "React 效能優化指南：使用 useMemo 和 useCallback 的正確時機",
    desc: "深入探討渲染機制，避免過度優化導致的程式碼維護災難。了解何時該用 memoization，何時該放手。",
    tags: ["React", "Performance"],
    views: "12.1k",
    likes: "9.3k",
    image: articleImg1,
  },
  {
    id: 3,
    date: "2025-12-07",
    author: "林雅婷",
    avatar: avatarLin,
    title: "愛恨交織的 Tailwind CSS：從抗拒到真香的實戰心得",
    desc: "還在用 Flexbox 解決所有排版問題嗎？學會區分一維與二維佈局的差異，讓你在處理複雜的 RWD 網格時事半功倍。",
    tags: ["Sass", "UI/UX"],
    views: "4.7k",
    likes: "2.3k",
    image: articleImg1,
  },
  {
    id: 4,
    date: "2025-12-09",
    author: "Sharon Wang",
    avatar: avatarYang,
    title: "Node.js 異步編程實戰：Async/Await 與 Promise 的終極指南",
    desc: "徹底搞懂 Event Loop。這篇文章將帶你深入 Node.js 核心，掌握高併發處理的關鍵技巧。",
    tags: ["Node.js", "TypeScript"],
    views: "3.5k",
    likes: "1.2k",
    image: articleImg1,
  },
];

const popularAuthors = [
  {
    name: "楊子萱",
    likes: "13k",
    articles: "12",
    avatar: avatarYang,
    rank: 1,
  },
  {
    name: "陳冠宇",
    likes: "10k",
    articles: "11",
    avatar: avatarChen,
    rank: 2,
  },
  {
    name: "林雅婷",
    likes: "9.2k",
    articles: "7",
    avatar: avatarLin,
    rank: 3,
  },
  {
    name: "李明",
    likes: "6.3k",
    articles: "3",
    avatar: avatarLee,
    rank: 4,
  },
  { name: "張偉", likes: "4.1k", articles: "3", avatar: avatarZhang, rank: 5 },
];

const recommendedAuthors = [
  {
    name: "楊子萱",
    desc: "專注 React 底層原理，每週更新一篇深度技術筆記。",
    avatar: avatarYang,
  },
  {
    name: "陳冠宇",
    desc: "專注 React 底層原理，每週更新一篇深度技術筆記。",
    avatar: avatarChen,
  },
  {
    name: "林雅婷",
    desc: "文組轉職過來人。不講深奧代碼，只分享新手面試攻略...",
    avatar: avatarLin,
  },
  {
    name: "Sharon Wang",
    desc: "前端跨後端。教你用 Node.js 與 Next.js",
    avatar: avatarSharon,
  },
  {
    name: "Sophie Tai",
    desc: "前沿技術搬運工。翻譯並解讀最新的前端框架趨勢",
    avatar: avatarSophie,
  },
];

//側邊欄作者
const SidebarAuthor = ({ data, type }) => {
  const isTop3 = type === "popular" && data.rank <= 3;
  const [isFollowed, setIsFollowed] = useState(false);

  const containerClass = `sidebar-author-item d-flex align-items-center mb-3 
    ${isTop3 ? "top-rank" : ""} 
    ${type === "popular" ? "clickable" : ""}`;

  return (
    <div className={containerClass}>
      <div className="author-info d-flex align-items-center">
        <img
          src={data.avatar}
          alt={data.name}
          className="avatar rounded-circle me-3"
        />
        <div>
          <div className="author-name">{data.name}</div>

          {type === "popular" ? (
            <div className="stats-row d-flex align-items-center gap-3 mt-1">
              <span className="icon-group d-flex align-items-center gap-1">
                <span className="material-symbols-outlined icon-sm">
                  thumb_up
                </span>
                <span className="num-text">{data.likes}</span>
              </span>
              <span className="icon-group d-flex align-items-center gap-1">
                <span className="material-symbols-outlined icon-sm">
                  article
                </span>
                <span className="num-text">{data.articles}</span>
              </span>
            </div>
          ) : (
            <div
              className="desc-text mt-1"
              style={{
                maxWidth: "140px",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {data.desc}
            </div>
          )}
        </div>
      </div>

      {type === "recommended" && (
        <button
          className={`btn-follow ms-auto ${isFollowed ? "followed" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFollowed(!isFollowed);
          }}
        >
          {isFollowed ? "已追蹤" : "追蹤"}
        </button>
      )}

      {isTop3 && (
        <div className="rank-badge ms-auto">
          <img src={rankIcons[data.rank]} alt={`Rank ${data.rank}`} />
        </div>
      )}
    </div>
  );
};

//組件
export default function ArticleListPage() {
  const [activeTab, setActiveTab] = useState("hot");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState(["全部"]);

  const hotTabRef = useRef(null);
  const latestTabRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const scrollRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const currentTab =
      activeTab === "hot" ? hotTabRef.current : latestTabRef.current;
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 200;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  // Mouse Down
  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  //Mouse Up
  const handleMouseUpOrLeave = () => {
    isDown.current = false;
    if (isDragging) {
      setIsDragging(false);
    }
  };

  //Mouse Move
  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;

    if (Math.abs(x - startX.current) > 5) {
      if (!isDragging) setIsDragging(true);
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleTagClick = (tag) => {
    if (isDragging) return;

    if (tag === "全部") {
      setSelectedTags(["全部"]);
      return;
    }

    let newTags = [...selectedTags];
    if (newTags.includes("全部")) {
      newTags = [];
    }

    if (newTags.includes(tag)) {
      newTags = newTags.filter((t) => t !== tag);
    } else {
      newTags.push(tag);
    }

    if (newTags.length === 0) {
      newTags = ["全部"];
    }
    setSelectedTags(newTags);
  };

  const filteredArticles = selectedTags.includes("全部")
    ? articlesData
    : articlesData.filter((article) =>
        article.tags.some((tag) => selectedTags.includes(tag))
      );

  return (
    <div className="article-list-page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-9 pe-lg-5 border-end-divider">
            <div className="page-header mb-4">
              <div className="d-flex justify-content-between align-items-end">
                <div>
                  <h2 className="text-white fw-bold mb-2">技術文章專區</h2>
                  <p className="m-0" style={{ color: "#b4b5b7" }}>
                    深度解析技術趨勢，分享實戰開發經驗
                  </p>
                </div>
                <button className="btn btn-write-article">撰寫文章</button>
              </div>
            </div>

            <div className="tabs-container d-flex w-100 align-items-center border-bottom border-dark mb-4 position-relative">
              <button
                ref={hotTabRef}
                className={`tab-btn flex-grow-1 text-center ${
                  activeTab === "hot" ? "active" : ""
                }`}
                onClick={() => setActiveTab("hot")}
              >
                熱門
              </button>
              <button
                ref={latestTabRef}
                className={`tab-btn flex-grow-1 text-center ${
                  activeTab === "latest" ? "active" : ""
                }`}
                onClick={() => setActiveTab("latest")}
              >
                最新
              </button>
              <div
                className="sliding-indicator"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                }}
              />
            </div>

            <div className="filter-section mb-4">
              <div className="d-flex align-items-center">
                <button
                  className={`btn-toggle-filter ${
                    isFilterOpen ? "active" : ""
                  }`}
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <i className="bi bi-sliders me-2"></i> 篩選
                </button>
                {isFilterOpen && (
                  <div className="tag-scroll-wrapper ms-3 position-relative flex-grow-1">
                    <button
                      className="scroll-arrow left"
                      onClick={() => scroll("left")}
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>
                    <div
                      className={`tags-container ${
                        isDragging ? "dragging" : ""
                      }`}
                      ref={scrollRef}
                      onMouseDown={handleMouseDown}
                      onMouseLeave={handleMouseUpOrLeave}
                      onMouseUp={handleMouseUpOrLeave}
                      onMouseMove={handleMouseMove}
                    >
                      {allTags.map((tag) => {
                        const isSelected = selectedTags.includes(tag);
                        return (
                          <button
                            key={tag}
                            className={`tag-chip ${
                              isSelected ? "selected" : ""
                            }`}
                            onClick={() => handleTagClick(tag)}
                          >
                            {tag}
                            {isSelected && tag !== "全部" && (
                              <i className="bi bi-x ms-1"></i>
                            )}
                          </button>
                        );
                      })}
                    </div>
                    <button
                      className="scroll-arrow right"
                      onClick={() => scroll("right")}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>
                    <div className="fade-mask right"></div>
                    <div className="fade-mask left"></div>
                  </div>
                )}
              </div>
            </div>

            <div className="article-list d-flex flex-column gap-4">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <ArticleListItem key={article.id} data={article} />
                ))
              ) : (
                <div className="text-neutral-400 py-5 text-center">
                  沒有找到相關標籤的文章
                </div>
              )}
            </div>

            <div className="text-center mt-5 mb-5">
              <button className="btn btn-view-more">查看更多 </button>
            </div>
          </div>

          <div className="col-lg-3 ps-lg-4">
            <div className="sidebar-spacer"></div>
            <div className="sidebar-section mb-5">
              <h5 className="sidebar-title glow-effect">熱門作者榜</h5>
              <div className="sidebar-box rounded-3">
                {popularAuthors.map((author, index) => (
                  <SidebarAuthor key={index} data={author} type="popular" />
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h5 className="sidebar-title">推薦作者</h5>
              <div className="sidebar-box">
                {recommendedAuthors.map((author, index) => (
                  <SidebarAuthor key={index} data={author} type="recommended" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
