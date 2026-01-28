import React from 'react';
// import "./QnaCard.scss"; // 若你有對應的 SCSS 檔

// 1. 狀態設定檔 (保留你的顏色與樣式)
const STATUS_CONFIG = {
    '待解決': {
        icon: 'bi-exclamation-triangle-fill',
        color: 'text-yellow-300',
        bg: 'badge-bg'
    },
    '已解決': {
        icon: 'bi bi-check-circle',
        color: 'text-green-300 ',
        bg: 'badge-bg'
    },
    '熱議中': {
        icon: 'bi-fire',
        color: 'text-fav-400',
        bg: 'badge-bg'
    }
};

const QnaCard = ({ data }) => {
    // 防呆：沒資料就不渲染
    if (!data) return null;

    const { status, time, title, excerpt, author, tags, stats } = data;

    // 取得對應樣式，預設為待解決
    const currentConfig = STATUS_CONFIG[status] || STATUS_CONFIG['待解決'];

    return (
        // ★ 完全保留你的外框樣式：bg-neutral-500, rounded-4, p-24px
        <div className="card h-100 bg-neutral-500 text-white border border-secondary p-24px rounded-4 d-flex flex-column mb-4">

            {/* --- 卡片頭部：狀態 + 作者/時間 --- */}
            <div className="d-flex justify-content-between align-items-center mb-20px">

                {/* 狀態 Badge */}
                <span className={`badge text-sm rounded-pill px-12px py-8px ${currentConfig.bg} ${currentConfig.color}`}>
                    <i className={`bi ${currentConfig.icon} me-2`}></i>
                    {status}
                </span>

                {/* 作者與時間 */}
                <div className="d-flex align-items-center gap-2 text-neutral-200">
                    <img
                        src={author.avatar}
                        alt={author.name}
                        className="rounded-circle"
                        width="24" height="24"
                    />
                    <small className="fw-bold">{author.name}</small>
                    <small className="opacity-50">|</small>
                    <small><i className="bi bi-clock me-1"></i>{time}</small>
                </div>
            </div>

            {/* --- 卡片內容：標題 + 摘要 --- */}
            <div>
                <h5 className="card-title fw-bold text-lg mb-2 cursor-pointer hover-text-primary">
                    {title}
                </h5>
                {/* 摘要文字，使用 text-truncate 避免過長 */}
                <p className="text-neutral-200 text-opacity-75 mb-20px text-truncate">
                    {excerpt}
                </p>
            </div>

            {/* 分隔線 */}
            <hr className="border-neutral-300 mb-20px" />

            {/* --- 卡片底部：Tags + 數據 --- */}
            <div className="d-flex justify-content-between align-items-center mt-auto">

                {/* 左側 Tags */}
                <div className="d-flex gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="badge bg-transparent border border-secondary text-neutral-200 fw-normal rounded-pill px-3">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* 右側 數據統計 */}
                <div className="d-flex gap-4 text-neutral-50 fw-bold">
                    <span className="d-flex align-items-center gap-2">
                        <i className="bi bi-hand-thumbs-up"></i>
                        {stats.votes}
                    </span>
                    <span className="d-flex align-items-center gap-2">
                        <i className="bi bi-chat-dots"></i>
                        {stats.replies}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default QnaCard;