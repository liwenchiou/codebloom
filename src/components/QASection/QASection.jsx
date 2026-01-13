import "../QASection/QASection.scss";

import React from 'react';

// 接收 props 讓資料可以動態傳入
const QACard = ({ status, time, title, answerCount, tags }) => {
    return (
        <div className="card h-100 bg-dark text-white border border-secondary p-4 rounded-4">
            {/* 卡片頭部：標籤 + 時間 */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="badge rounded-pill text-bg-warning px-3 py-2">
                    ⚠️ {status}
                </span>
                <small className="text-secondary">🕒 {time}</small>
            </div>

            {/* 卡片標題 */}
            <h5 className="card-title fw-bold mb-4" style={{ minHeight: '80px' }}>
                {title}
            </h5>

            <hr className="border-secondary mb-3" />

            {/* 卡片底部：回答數 + 按鈕 */}
            <div className="d-flex justify-content-between align-items-center">
                <span className="text-secondary">
                    💬 {answerCount} 個回答
                </span>
                <button className="btn btn-info text-dark fw-bold rounded-pill px-4">
                    回答
                </button>
            </div>
        </div>
    );
};

export default QACard;

