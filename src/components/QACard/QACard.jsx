import React from 'react';
import "./QACard.scss";

// 狀態設定檔 (Config Object)
const STATUS_CONFIG = {
    '待解決': {
        icon: 'bi-exclamation-triangle-fill',
        color: 'text-yellow-300',      // 字體顏色
        bg: 'badge-bg'
    },
    '已解決': {
        icon: 'bi bi-check-circle',
        color: 'text-green-300 ',         // Bootstrap 綠色
        bg: 'badge-bg'
    },
    '熱議中': {
        icon: 'bi-fire',
        color: 'text-fav-400',          // Bootstrap 紅色
        bg: 'badge-bg'
    }
};

// 接收 props 讓資料可以動態傳入
const QACard = ({ status, time, title, answerCount }) => {
    // 👇 關鍵邏輯：根據傳入的 status 文字，去設定檔抓取對應的樣式
    // 如果找不到 (比如資料寫錯)，就給一個預設值 (Default)
    const currentConfig = STATUS_CONFIG[status] || {
        icon: 'bi-question-circle',
        color: 'text-secondary',
        bg: 'bg-secondary-subtle'
    };
    return (
        <div className="card h-100 bg-neutral-500 text-white border border-secondary p-24px rounded-4 d-flex flex-column">
            <div>
                {/* 卡片頭部：標籤 + 時間 */}
                <div className="d-flex justify-content-between align-items-center mb-20px">
                    <span className={`badge text-sm rounded-pill px-12px py-8px ${currentConfig.bg} ${currentConfig.color}`}>
                        <i className={`bi ${currentConfig.icon} me-2`}></i>
                        {status}
                    </span>
                    <small className="text-neutral-200"><i class="bi bi-clock"></i> {time}</small>
                </div>
            </div>

            <div>
                {/* 卡片標題 */}
                <h5 className="card-title fw-bold text-lg mb-20px" style={{ minHeight: '60px' }}>
                    {title}
                </h5>
            </div>


            <hr className="border-neutral-300 mb-20px" />

            {/* 卡片底部：回答數 + 按鈕 */}
            <div className="d-flex justify-content-between align-items-center mt-auto">
                <span className="text-neutral-50">
                    {answerCount} 個回答
                </span>
                <button className="btn btn-info text-neutral-500 fw-bold rounded-4 px-24px py-12px">
                    回答
                </button>
            </div>
        </div>
    );
};

export default QACard;