import React, { useState } from "react";
import "./ProductCard.scss";

const ProductCard = ({ data }) => {
  const [isLiked, setIsLiked] = useState(data.isLiked || false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 120);
  };

  // 難度等級對應的顏色和標籤
  const difficultyConfig = {
    初級: { color: "#40c79a", label: "初級" },
    中級: { color: "#eec239", label: "中級" },
    進階: { color: "#ed4d4d", label: "進階" },
  };

  const difficulty = difficultyConfig[data.difficulty] || difficultyConfig.初級;

  return (
    <div className="product_card">
      {/* 產品圖片區域 */}
      <div className="product_image_wrapper">
        <img src={data.image} alt={data.title} className="product_image"  loading="lazy" />

        {/* 難度徽章 */}
        {data.difficulty && (
          <div className="product_difficulty_badge" style={{ backgroundColor: difficulty.color }}>
            {difficulty.label}
          </div>
        )}

        {/* 點讚按鈕 */}
        <button
          onClick={handleLikeClick}
          className="product_btn_like rounded-circle text-white"
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

        {/* 統計信息浮層 */}
        <div className="product_stats">
          <div className="product_stat_item">
            <span className="product_stat_icon">👁️</span>
            <span className="product_stat_text">{data.views}</span>
          </div>
          <div className="product_stat_item">
            <span className="product_stat_icon">❤️</span>
            <span className="product_stat_text">{data.likes}</span>
          </div>
        </div>
      </div>

      {/* 產品信息區域 */}
      <div className="product_info">
        {/* 標題和分類 */}
        <div className="product_header">
          <h3 className="product_title">{data.title}</h3>
          {data.category && (
            <span className="product_category_badge">{data.category}</span>
          )}
        </div>

        {/* 描述 */}
        {data.description && (
          <p className="product_description">{data.description}</p>
        )}

        {/* 技術棧標簽 */}
        {data.tags && data.tags.length > 0 && (
          <div className="product_tags">
            {data.tags.map((tag, index) => (
              <span key={index} className="product_tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* 作者信息 */}
        {data.author && (
          <div className="product_footer">
            <div className="product_author_info">
              {data.avatar && (
                <img src={data.avatar}
                  alt={data.author}
                  className="product_author_avatar"
                 loading="lazy" />
              )}
              <div className="product_author_details">
                <span className="product_author_name">{data.author}</span>
                {data.releaseDate && (
                  <span className="product_release_date">{data.releaseDate}</span>
                )}
              </div>
            </div>

            {/* 操作按鈕 */}
            {(data.demoUrl || data.sourceUrl) && (
              <div className="product_action_buttons">
                {data.demoUrl && (
                  <a
                    href={data.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product_btn_action product_btn_demo cb-btn"
                    title="查看演示"
                  >
                    Demo
                  </a>
                )}
                {data.sourceUrl && (
                  <a
                    href={data.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product_btn_action product_btn_source cb-btn-outline"
                    title="查看源代碼"
                  >
                    Code
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
