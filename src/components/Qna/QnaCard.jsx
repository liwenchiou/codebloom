import React from "react";
// import "./QnaCard.scss"; // 記得建立對應的 SCSS

const QnaCard = ({ data }) => {
  // 根據狀態切換樣式與圖示
  const isUrgent = data.status === "urgent";
  const badgeClass = isUrgent ? "status-urgent" : "status-solved";
  const statusIcon = isUrgent ? "bi-exclamation-octagon" : "bi-check2-circle";

  return (
    <div className="qna-card-item mb-4 border-bottom border-secondary border-opacity-10 pb-4">
      {/* 頂部：狀態、作者、時間 */}
      <div className="meta-top d-flex align-items-center gap-3 mb-2">
        <span
          className={`status-badge ${badgeClass} d-flex align-items-center gap-1`}
        >
          <i className={`bi ${statusIcon}`}></i>
          {data.statusLabel}
        </span>

        <div className="author-info d-flex align-items-center">
          <img
            src={data.avatar}
            alt={data.author}
            className="avatar-sm rounded-circle me-2"
            style={{ width: "24px" }}
          />
          <span className="author-name text-white-50 small">{data.author}</span>
        </div>

        <span className="time-text text-neutral-400 small">
          <i className="bi bi-clock me-1"></i>
          {data.time}
        </span>
      </div>

      {/* 主體：標題與內容 */}
      <div className="qna-main-content">
        <h3 className="h5 text-white fw-bold mb-2">{data.title}</h3>
        <p className="text-neutral-100 small mb-3" style={{ opacity: 0.8 }}>
          {data.desc}
        </p>
      </div>

      {/* 底部：標籤與數據 */}
      <div className="qna-footer d-flex justify-content-between align-items-center">
        <div className="tags-group d-flex gap-2">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="badge rounded-pill bg-secondary bg-opacity-25 text-info fw-normal"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="stats-group d-flex align-items-center gap-4 text-white-50 small">
          <span>
            <i className="bi bi-caret-up-fill me-1"></i>
            {data.likes}
          </span>
          <span>
            <i className="bi bi-chat-dots me-1"></i>
            {data.replies}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QnaCard;
