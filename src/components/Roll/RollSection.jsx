import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./RollSection.scss";

import img1 from "../../assets/images/index/Image card.png";
import img2 from "../../assets/images/index/Image card-1.png";
import img3 from "../../assets/images/index/Image card-2.png";
import img4 from "../../assets/images/index/Image card-3.png";

gsap.registerPlugin(ScrollTrigger);

export default function RollSection() {
  const containerRef = useRef(null);

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = Array.from(container.querySelectorAll(".roll-card-section"));
    const animations = [];

    const setActiveSection = (target) => {
      sections.forEach((section) => section.classList.remove("roll-section-active"));
      if (target) target.classList.add("roll-section-active");
    };

    const containerTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      onLeave: () => setActiveSection(null),
      onLeaveBack: () => setActiveSection(null),
    });
    animations.push(containerTrigger);

    sections.forEach((section, index) => {
      const card = section.querySelector(".roll-card");
      if (!card) return;

      const activeTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        onToggle: (self) => {
          if (self.isActive) setActiveSection(section);
        },
      });
      animations.push(activeTrigger);

      if (index === sections.length - 1) {
        gsap.set(card, { opacity: 1, scale: 1 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      tl.set(card, { opacity: 1, scale: 1, force3D: true });
      tl.to(card, { opacity: 0, scale: 0.6, ease: "none", force3D: true }, 0);
      animations.push(tl);
    });

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const activeNow =
        sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3;
        }) || sections[0];
      setActiveSection(activeNow);
    });

    return () => {
      animations.forEach((item) => {
        item.scrollTrigger?.kill?.();
        item.kill?.();
      });
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section className="sc-wrap">
      <div className="sc-stage">
        <div className="feature-header">
          <h2 className="feature-title">
            從萌芽到綻放，<span className="text-CodeBloom">CodeBloom</span>{" "}
            讓您的技術價值被看見
          </h2>
          <p className="feature-subtitle">
            我們不僅是作品展示平台，更是助您變現技能、加速成長的全方位工程師社群。
          </p>
        </div>
      </div>

      <div className="roll-cards-container" ref={containerRef}>
        {cards.map((card, i) => (
          <div key={i} className="roll-card-section">
            <div className="roll-card-wrap" style={{ zIndex: cards.length - i }}>
              <div className="roll-glow" aria-hidden="true" />
              <div className="roll-card">
                <div className="feature-card">
                  <div className="feature-text">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                  <div className="feature-visual">
                    <img src={card.img} alt={card.title} />
                    <span className="frame tl" />
                    <span className="frame tr" />
                    <span className="frame bl" />
                    <span className="frame br" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}