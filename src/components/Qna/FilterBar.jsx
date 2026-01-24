import React from 'react';

const FilterBar = () => {
    return (
        <div className="d-flex justify-content-between align-items-center border-bottom border-secondary mb-3 pb-2">
            {/* 左側 Tabs */}
            <div className="nav nav-pills filter-tabs">
                <button className="nav-link active text-white">熱門</button>
                <button className="nav-link text-secondary">最新</button>
            </div>

            {/* 右側篩選按鈕 */}
            <button className="btn btn-sm btn-outline-info rounded-pill px-3">
                <i className="bi bi-funnel-fill me-1"></i> 篩選
            </button>
        </div>
    );
};

export default FilterBar;