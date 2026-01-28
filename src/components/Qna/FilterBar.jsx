import React from 'react';

// 接收 props: currentFilter, onFilterChange
const FilterBar = ({ currentFilter, onFilterChange }) => {

    return (
        <div className="mb-4">
            {/* --- 上半部：導航列 (Nav Tabs) --- */}
            {/* 使用 justify-content-between 把「熱門」和「最新」推到兩端 */}
            <div className="d-flex justify-content-between align-items-end border-bottom border-secondary border-opacity-25">

                {/* 左側：熱門 Tab */}
                <button
                    onClick={() => onFilterChange('hot')}
                    className={`btn rounded-0 border-0 border-bottom border-3 pb-3 px-0 fw-bold ${currentFilter === 'hot'
                            ? 'border-info text-info'     // 選中：亮藍色底線 + 文字
                            : 'border-transparent text-secondary' // 未選中：透明底線 + 灰字
                        }`}
                    // ★ 關鍵魔法：負邊距 (Negative Margin)
                    // 讓按鈕的底線往下移 1px，剛好蓋住外層容器的灰色底線
                    style={{ marginBottom: '-1px' }}
                >
                    熱門
                </button>

                {/* 右側：最新 Tab */}
                <button
                    onClick={() => onFilterChange('new')}
                    className={`btn rounded-0 border-0 border-bottom border-3 pb-3 px-0 fw-bold ${currentFilter === 'new'
                            ? 'border-info text-info'
                            : 'border-transparent text-secondary'
                        }`}
                    style={{ marginBottom: '-1px' }}
                >
                    最新
                </button>

            </div>

            {/* --- 下半部：篩選工具列 (Filter) --- */}
            {/* 根據設計稿，篩選按鈕是在分隔線的「下面」 */}
            <div className="py-3">
                <button className="btn btn-link text-decoration-none text-secondary p-0 d-flex align-items-center gap-2 hover-text-white transition-colors">
                    {/* 這裡使用 Bootstrap Icon 的 filter 圖示，或者你可以換成設計稿的 icon */}
                    <i className="bi bi-sliders2"></i>
                    <span className="fw-bold">篩選</span>
                </button>
            </div>

        </div>
    );
};

export default FilterBar;