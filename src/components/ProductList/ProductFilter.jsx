import React, { useState } from "react";
import "./ProductFilter.scss";

const ProductFilter = ({ onFilterChange }) => {
  const [activeFilters, setActiveFilters] = useState({
    technologies: [],
    difficulty: [],
    categories: [],
    sortBy: "latest",
  });

  const [showFilters, setShowFilters] = useState(false);

  // 篩選選項數據
  const filterOptions = {
    technologies: [
      "React",
      "Vue",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "MongoDB",
      "GraphQL",
    ],
    difficulty: ["初級", "中級", "進階"],
    categories: ["Web應用", "移動應用", "工具", "教學案例", "UI組件庫"],
    sortBy: [
      { label: "最新", value: "latest" },
      { label: "最熱", value: "popular" },
      { label: "最受歡迎", value: "liked" },
    ],
  };

  // 切換技術棧篩選
  const toggleTechnology = (tech) => {
    const updated = activeFilters.technologies.includes(tech)
      ? activeFilters.technologies.filter((t) => t !== tech)
      : [...activeFilters.technologies, tech];

    const newFilters = { ...activeFilters, technologies: updated };
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  // 切換難度篩選（單選）
  const toggleDifficulty = (diff) => {
    const updated =
      activeFilters.difficulty.length === 1 &&
      activeFilters.difficulty[0] === diff
        ? []
        : [diff];

    const newFilters = { ...activeFilters, difficulty: updated };
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  // 切換分類篩選
  const toggleCategory = (cat) => {
    const updated = activeFilters.categories.includes(cat)
      ? activeFilters.categories.filter((c) => c !== cat)
      : [...activeFilters.categories, cat];

    const newFilters = { ...activeFilters, categories: updated };
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  // 改變排序
  const handleSortChange = (value) => {
    const newFilters = { ...activeFilters, sortBy: value };
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  // 清除所有篩選
  const clearAllFilters = () => {
    const newFilters = {
      technologies: [],
      difficulty: [],
      categories: [],
      sortBy: "latest",
    };
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  // 計算活動篩選數量
  const activeCount =
    activeFilters.technologies.length +
    activeFilters.difficulty.length +
    activeFilters.categories.length;

  return (
    <div className="product_filter">
      {/* 篩選欄 */}
      <div className={`product_filter_panel ${showFilters ? "show" : ""}`}>
        <div className="product_filter_header">
          <h3 className="product_filter_title">篩選</h3>
          <button
            className="product_filter_close_btn d-lg-none"
            onClick={() => setShowFilters(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* 技術棧篩選 */}
        <div className="product_filter_group">
          <h4 className="product_filter_group_title">技術棧</h4>
          <div className="product_filter_options">
            {filterOptions.technologies.map((tech) => (
              <label key={tech} className="product_filter_checkbox">
                <input
                  type="checkbox"
                  checked={activeFilters.technologies.includes(tech)}
                  onChange={() => toggleTechnology(tech)}
                />
                <span className="checkbox-label">{tech}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 難度篩選 */}
        <div className="product_filter_group">
          <h4 className="product_filter_group_title">難度</h4>
          <div className="product_filter_options">
            {filterOptions.difficulty.map((diff) => (
              <label key={diff} className="product_filter_radio">
                <input
                  type="radio"
                  name="difficulty"
                  checked={activeFilters.difficulty.includes(diff)}
                  onChange={() => toggleDifficulty(diff)}
                />
                <span className="radio-label">{diff}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 分類篩選 */}
        <div className="product_filter_group">
          <h4 className="product_filter_group_title">分類</h4>
          <div className="product_filter_options">
            {filterOptions.categories.map((cat) => (
              <label key={cat} className="product_filter_checkbox">
                <input
                  type="checkbox"
                  checked={activeFilters.categories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                <span className="checkbox-label">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 清除篩選按鈕 */}
        {activeCount > 0 && (
          <button
            className="product_btn_clear_filters"
            onClick={clearAllFilters}
          >
            清除所有篩選
          </button>
        )}
      </div>

      {/* 篩選欄遮罩 (移動設備用) */}
      {showFilters && (
        <div
          className="product_filter_overlay d-lg-none"
          onClick={() => setShowFilters(false)}
        ></div>
      )}

      {/* 排序和篩選按鈕欄 */}
      <div className="product_filter_toolbar">
        <div className="sort-wrapper">
          <label htmlFor="sort-select" className="sort-label">
            排序：
          </label>
          <select
            id="sort-select"
            className="sort-select"
            value={activeFilters.sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            {filterOptions.sortBy.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* 篩選按鈕（移動設備用） */}
        <button
            className="product_btn_toggle_filters d-lg-none"
          onClick={() => setShowFilters(!showFilters)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          篩選
          {activeCount > 0 && <span className="product_filter_badge">{activeCount}</span>}
        </button>

        {/* 活動篩選標籤 */}
        {activeCount > 0 && (
          <div className="active-filters d-none d-lg-flex">
            {activeFilters.technologies.map((tech) => (
              <span key={tech} className="product_filter_tag">
                {tech}
                <button
                  onClick={() => toggleTechnology(tech)}
                  className="tag-remove"
                >
                  ×
                </button>
              </span>
            ))}
            {activeFilters.difficulty.map((diff) => (
              <span key={diff} className="product_filter_tag">
                {diff}
                <button
                  onClick={() => toggleDifficulty(diff)}
                  className="tag-remove"
                >
                  ×
                </button>
              </span>
            ))}
            {activeFilters.categories.map((cat) => (
              <span key={cat} className="product_filter_tag">
                {cat}
                <button
                  onClick={() => toggleCategory(cat)}
                  className="tag-remove"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
