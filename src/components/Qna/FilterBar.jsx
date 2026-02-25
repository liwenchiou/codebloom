import React, { useState, useRef, useEffect } from "react";

// 定義標籤常數 (與技術文章區一致)
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

const FilterBar = ({
  currentFilter,
  onFilterChange,
  selectedTags,
  onTagsChange,
}) => {
  // --- 狀態管理 ---
  const [isFilterOpen, setIsFilterOpen] = useState(true); // 預設開啟以對齊視覺
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // --- Refs (用於計算位置與拖曳) ---
  const hotTabRef = useRef(null);
  const latestTabRef = useRef(null);
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // 1. 滑動指示器邏輯：跟隨 currentFilter (熱門/最新) 移動
  useEffect(() => {
    const currentTab =
      currentFilter === "hot" ? hotTabRef.current : latestTabRef.current;
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [currentFilter]);

  // 2. 橫向捲動箭頭控制 (Pagination)
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 200;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // 3. 鼠標拖曳滾動邏輯 (Drag-to-Scroll)
  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseUpOrLeave = () => {
    isDown.current = false;
    // 延遲重置拖曳狀態，避免誤觸標籤點擊事件
    if (isDragging) setTimeout(() => setIsDragging(false), 50);
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // 設定靈敏度
    if (Math.abs(x - startX.current) > 5) {
      setIsDragging(true);
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  // 4. 標籤點擊篩選邏輯
  const handleTagClick = (tag) => {
    if (isDragging) return; // 拖曳中不執行篩選

    if (tag === "全部") {
      onTagsChange(["全部"]);
      return;
    }

    let newTags = [...selectedTags].filter((t) => t !== "全部");
    if (newTags.includes(tag)) {
      newTags = newTags.filter((t) => t !== tag);
    } else {
      newTags.push(tag);
    }

    if (newTags.length === 0) newTags = ["全部"];
    onTagsChange(newTags);
  };

  return (
    <div className="filter-area-wrapper">
      {/* --- 上半部：熱門/最新 Tabs (與技術文章完全一致) --- */}
      <div className="tabs-container d-flex w-100 align-items-center border-bottom border-dark mb-4 position-relative">
        <button
          ref={hotTabRef}
          className={`tab-btn flex-grow-1 text-center ${currentFilter === "hot" ? "active" : ""}`}
          onClick={() => onFilterChange("hot")}
        >
          熱門
        </button>
        <button
          ref={latestTabRef}
          className={`tab-btn flex-grow-1 text-center ${currentFilter === "new" ? "active" : ""}`}
          onClick={() => onFilterChange("new")}
        >
          最新
        </button>
        {/* 動態滑動指示器 */}
        <div
          className="sliding-indicator"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
          }}
        />
      </div>

      {/* --- 下半部：篩選按鈕與標籤滾動列 --- */}
      <div className="filter-section mb-4">
        <div className="d-flex align-items-center">
          {/* 篩選切換按鈕 */}
          <button
            className={`btn-toggle-filter ${isFilterOpen ? "active" : ""}`}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <i className="bi bi-sliders me-2"></i> 篩選
          </button>

          {isFilterOpen && (
            <div className="tag-scroll-wrapper ms-3 position-relative flex-grow-1">
              {/* 分頁控制：左箭頭 */}
              <button
                className="scroll-arrow left"
                onClick={() => scroll("left")}
              >
                <i className="bi bi-chevron-left"></i>
              </button>

              {/* 標籤容器 (支援拖曳與橫向捲動) */}
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

              {/* 分頁控制：右箭頭 */}
              <button
                className="scroll-arrow right"
                onClick={() => scroll("right")}
              >
                <i className="bi bi-chevron-right"></i>
              </button>

              {/* 漸層遮罩 (對齊視覺) */}
              <div className="fade-mask left"></div>
              <div className="fade-mask right"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
