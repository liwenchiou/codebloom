import { useRef } from "react";
import "./RollSection.scss";

import img1 from "../../assets/images/index/Image card.png";
import img2 from "../../assets/images/index/Image card-1.png";
import img3 from "../../assets/images/index/Image card-2.png";
import img4 from "../../assets/images/index/Image card-3.png";


export default function RollSection() {
  const slidesRef = useRef([]);
  const animatingRef = useRef(false);

  const cards = [
    {
      title: "打造個人技術品牌",
      desc: "告別GitHub單調的列表！用美觀、專業的作品集頁面呈現您的專案，讓企業與合作夥伴一眼看見您的設計與技術實力。",
      img: img1,
    },
    {
      title: "程式碼變現機制",
      desc: "不要讓side project沉睡在硬碟裡，將您的 UI 元件或切版模板上架販售，讓專業技能直接轉化為實質的被動收入。",
      img: img2,
    },
    {
      title: "高質量的技術交流",
      desc: "這裡沒有無意義的灌水。專注於 Code Review、架構探討與切版技巧分享，與高手切磋，讓每一次討論都能帶來實質進步。",
      img: img3,
    },
    {
      title: "視覺化成長履歷",
      desc: "透過任務挑戰與技能徵章，系統化記錄您的學習歷程。這不僅是遊戲化體驗，更是企業評估潛力人才的有力依據。",
      img: img4,
    },
  ];

  const nextSlide = () => {
    if (animatingRef.current) return;

    const slides = slidesRef.current;
    if (!slides.length) return;

    let activeIndex = slides.findIndex((el) =>
      el.classList.contains("active")
    );
    if (activeIndex === -1) {
      slides[0].classList.add("active");
      return;
    }

    const nextIndex = (activeIndex + 1) % slides.length;

    slides.forEach((el) => el.classList.remove("last-active"));

    const current = slides[activeIndex];
    const next = slides[nextIndex];

    animatingRef.current = true;

    current.classList.remove("active");
    current.classList.add("last-active");
    next.classList.add("active");

    const onEnd = (e) => {
      if (e.propertyName !== "transform") return;
      animatingRef.current = false;
      next.removeEventListener("transitionend", onEnd);
    };

    next.addEventListener("transitionend", onEnd);
  };

  return (
    <section className="sc-wrap">
      <div className="sc-stage">

        {/*卡片上方標題*/}
        <div className="feature-header">
          <h2 className="feature-title">
            從萌芽到綻放，<span className="text-CodeBloom">CodeBloom</span> 讓您的技術價值被看見
          </h2>
          <p className="feature-subtitle">
            我們不僅是作品展示平台，更是助您變現技能、加速成長的全方位工程師社群。
          </p>
        </div>

        {/* ===== 卡片本體（原本邏輯，未動） ===== */}
        <div className="sc-card" onClick={nextSlide}>
          <div className="photo-frame">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`photo-slide ${i === 0 ? "active" : ""}`}
                ref={(el) => (slidesRef.current[i] = el)}
              >
                <div className="feature-card">
                  {/* 左側文字 */}
                  <div className="feature-text">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>

                  {/* 右側圖片 */}
                  <div className="feature-visual">
                    <img src={card.img} alt={card.title} />
                    <span className="frame tl" />
                    <span className="frame tr" />
                    <span className="frame bl" />
                    <span className="frame br" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="click-hint">Click to Switch ⟳</div>
        </div>
      </div>
    </section>
  );
}
