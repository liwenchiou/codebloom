import React from 'react';

const QnaTop = () => {
    return (
        <div className="d-flex justify-content-between mb-4 align-items-center">
            {/* 左側：標題與副標題 */}
            <div>
                <h2 className="h2 text-white mb-12px">問答社群專區</h2>
                <p className="text-neutral-100 mb-0">分享知識、交流經驗，一起突破技術瓶頸</p>
            </div>

            {/* 右側：提出問題按鈕 */}
            <div>
                <button className="btn bg-primary-400 rounded-2 px-4 text-neutral-500">
                    提出問題
                </button>
            </div>
        </div>
    );
};

export default QnaTop;