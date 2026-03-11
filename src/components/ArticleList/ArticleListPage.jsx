import React, { useState, useRef, useEffect } from "react";
import "./ArticleListPage.scss";
import ArticleListItem from "./ArticleListItem";
import LoginModal from "./LoginModal";

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

// 數字格式化工具
const formatCount = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num;
};

const rankIcons = { 1: goldPen, 2: silverPen, 3: bronzePen };

const popularAuthors = [
  { name: "楊子萱", likes: "13k", articles: "12", avatar: avatarYang, rank: 1 },
  { name: "陳冠宇", likes: "10k", articles: "11", avatar: avatarChen, rank: 2 },
  { name: "林雅婷", likes: "9.2k", articles: "7", avatar: avatarLin, rank: 3 },
  { name: "李明", likes: "6.3k", articles: "3", avatar: avatarLee, rank: 4 },
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

// 側邊欄作者
const SidebarAuthor = ({ data, type, onRequireLogin }) => {
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
            onRequireLogin();
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

// 主頁面
export default function ArticleListPage() {
  const [activeTab, setActiveTab] = useState("hot");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState(["全部"]);

  // Tags
  const [allTags, setAllTags] = useState(["全部"]);

  const [articlesData, setArticlesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const hotTabRef = useRef(null);
  const latestTabRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // 串接API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://codebloom-api.zeabur.app/articleList",
        );
        if (!response.ok) throw new Error("網路請求失敗，請稍後再試");
        const data = await response.json();

        const uniqueTags = new Set(["全部"]);

        const formattedData = data.map((item) => {
          const itemTags = Array.isArray(item.tags)
            ? item.tags
            : [item.category];
          itemTags.forEach((tag) => uniqueTags.add(tag));

          return {
            id: item.id,
            title: item.title,
            author: item.author,
            date: item.date,
            desc: item.description,
            image: item.cover,
            views: formatCount(item.views),
            rawViews: item.views,
            tags: itemTags,
            likes: item.likes !== undefined ? formatCount(item.likes) : 0,
            avatar: item.authorAvatar,
          };
        });

        setAllTags(Array.from(uniqueTags));
        setArticlesData(formattedData);
      } catch (err) {
        console.error("API 獲取錯誤:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  // Tabs動畫
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

  // Tab數量
  useEffect(() => {
    setVisibleCount(4);
  }, [selectedTags, activeTab]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      if (direction === "left")
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      else
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };
  const handleMouseUpOrLeave = () => {
    isDown.current = false;
    if (isDragging) setIsDragging(false);
  };
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
    if (newTags.includes("全部")) newTags = [];
    if (newTags.includes(tag)) {
      newTags = newTags.filter((t) => t !== tag);
    } else {
      newTags.push(tag);
    }
    if (newTags.length === 0) newTags = ["全部"];
    setSelectedTags(newTags);
  };

  // 資料處理
  const baseFilteredArticles = selectedTags.includes("全部")
    ? articlesData
    : articlesData.filter((article) =>
        article.tags.some((tag) => selectedTags.includes(tag)),
      );

  const sortedArticles = [...baseFilteredArticles].sort((a, b) => {
    if (activeTab === "hot") {
      return b.rawViews - a.rawViews;
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });

  const displayedArticles = sortedArticles.slice(0, visibleCount);

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
                <button
                  className="btn btn-write-article"
                  onClick={() => setShowLoginModal(true)}
                >
                  撰寫文章
                </button>
              </div>
            </div>

            <div className="tabs-container d-flex w-100 align-items-center border-bottom border-dark mb-4 position-relative">
              <button
                ref={hotTabRef}
                className={`tab-btn flex-grow-1 text-center ${activeTab === "hot" ? "active" : ""}`}
                onClick={() => setActiveTab("hot")}
              >
                熱門
              </button>
              <button
                ref={latestTabRef}
                className={`tab-btn flex-grow-1 text-center ${activeTab === "latest" ? "active" : ""}`}
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
                  className={`btn-toggle-filter ${isFilterOpen ? "active" : ""}`}
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
                      className={`tags-container ${isDragging ? "dragging" : ""}`}
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
                            className={`tag-chip ${isSelected ? "selected" : ""}`}
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
              {isLoading ? (
                <div className="text-neutral-400 py-5 text-center">
                  文章載入中...
                </div>
              ) : error ? (
                <div className="text-danger py-5 text-center">{error}</div>
              ) : displayedArticles.length > 0 ? (
                displayedArticles.map((article) => (
                  <ArticleListItem key={article.id} data={article} />
                ))
              ) : (
                <div className="text-neutral-400 py-5 text-center">
                  沒有找到相關標籤的文章
                </div>
              )}
            </div>

            {visibleCount < sortedArticles.length && (
              <div className="text-center mt-5 mb-5">
                <button
                  className="btn btn-view-more"
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                >
                  查看更多
                </button>
              </div>
            )}
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
                  <SidebarAuthor
                    key={index}
                    data={author}
                    type="recommended"
                    onRequireLogin={() => setShowLoginModal(true)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
}
