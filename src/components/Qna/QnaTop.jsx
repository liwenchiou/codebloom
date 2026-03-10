import React, { useState } from "react";
import LoginModal from "../ArticleList/LoginModal";

const QnaTop = () => {
  // 1. 定義狀態來控制 LoginModal
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="d-flex justify-content-between mb-4 align-items-center">
      {/* 左側：標題與副標題 */}
      <div>
        <h2 className="h2 text-white mb-12px">問答社群專區</h2>
        <p className="text-neutral-100 mb-0">
          分享知識、交流經驗，一起突破技術瓶頸
        </p>
      </div>

      {/* 右側：提出問題按鈕 */}
      <div>
        <button
          className="cb-btn bg-primary-400 rounded-2 px-4 text-neutral-500"
          onClick={() => setShowLoginModal(true)} // 2. 觸發顯示
        >
          提出問題
        </button>
      </div>

      {/* 3. 根據狀態條件渲染 Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
};

export default QnaTop;
