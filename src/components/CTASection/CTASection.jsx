import React, { useState } from "react"; // 記得引入 useState
import LoginModal from "../ArticleList/LoginModal";

// Images
import bgBinary from "../../assets/images/index/bg2-PC.png";

const CtaSection = () => {
  // 1. 新增登入視窗的狀態控制
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <section className="cta-section position-relative overflow-hidden bg-neutral-700 text-white">
      {/* 背景層... (保持不變) */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${bgBinary})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <div className="container position-relative py-80px">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            {/* 標題與內容... (保持不變) */}
            <h2 className="h4 mb-16px section-title">
              準備好讓{" "}
              <span className="mx-8px mx-lg-12px text-primary-600 mb-8px d-inline-block">
                你的程式碼
              </span>
              <br className="d-md-none" />
              綻放光芒了嗎？
            </h2>

            <p className="text-white-50 text-sm mb-36px px-3 px-md-5 section-text">
              不要讓才華被埋沒，加入 CodeBloom，將你的 Side Project
              轉化為有價值的資產。
            </p>

            {/* 2. 修改按鈕的 onClick 事件 */}
            <button
              className="btn btn-lg rounded-pill px-5 fw-bold"
              style={{
                backgroundColor: "#00E5FF",
                color: "#000",
                border: "none",
              }}
              onClick={() => setShowLoginModal(true)}
            >
              立即加入
            </button>
          </div>
        </div>
      </div>

      {/* 3. 根據狀態渲染 Modal */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </section>
  );
};

export default CtaSection;
