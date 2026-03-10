// Images
import bgBinary from "../../assets/images/index/bg2-PC.png";

//section
const CtaSection = () => {
  const handleJoinClick = () => {
    // 回到最上面
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 延遲一下等畫面稍微捲上去後，彈出註冊表單
    setTimeout(() => {
      window.dispatchEvent(new Event("openRegisterModal"));
    }, 300);
  };

  return (
    <section className="cta-section position-relative overflow-hidden bg-neutral-700 text-white">
      {/* 1. 背景裝飾層 (Background Layer) 
        使用絕對定位蓋在底層，並調整透明度，這樣不會影響文字閱讀
      */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${bgBinary})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4, // 依照設計稿調整透明度
          pointerEvents: "none", // 關鍵：讓滑鼠點擊可以穿透這層，點到下面的按鈕
        }}
      />

      {/* 2. 內容層 (Content Layer) */}
      <div className="container position-relative py-80px">
        <div className="row justify-content-center">
          {/* Grid 策略：
             - col-12: 手機版佔滿
             - col-lg-8: 桌機版限制寬度，避免文字拉太長
          */}
          <div className="col-12 col-lg-8 text-center">
            <h2 className="h4 mb-16px section-title">
              準備好讓
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

            <button
              className="btn btn-lg rounded-pill px-5 fw-bold"
              style={{
                backgroundColor: "#00E5FF",
                color: "#000",
                border: "none",
              }}
            >
              立即加入
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
