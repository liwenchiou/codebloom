import React from "react";
import { Link } from "react-router-dom";

// Images
import qaBg from "../../assets/images/index/PC-3.png";

// 1. 引入 Swiper 核心元件
import { Swiper, SwiperSlide } from "swiper/react";
// 2. 引入 Swiper 模組 (分頁圓點、自動播放等)
import { Pagination, Navigation } from "swiper/modules";

// 3. 引入 Swiper 樣式 (這是必須的)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 引入剛剛做好的卡片
import QACard from "../QACard/QACard";
import "./QASection.scss"; // 晚點用來微調樣式

const QASection = () => {
  // 模擬資料 (Data Mock)
  const qaList = [
    {
      id: 1,
      status: "待解決",
      time: "5 小時前",
      count: 2,
      title: "useEffect 造成無限 re-render，依賴陣列該怎麼設？",
    },
    {
      id: 2,
      status: "待解決",
      time: "1 週前",
      count: 2,
      title: "請問這種 3D 翻轉卡片的效果， 純 CSS 做得到嗎？",
    },
    {
      id: 3,
      status: "已解決",
      time: "2 天前",
      count: 8,
      title: "遇到 CORS 跨域錯誤，後端說他已經開了，為什麼前端還是報錯？",
    },
    {
      id: 4,
      status: "已解決",
      time: "2 天前",
      count: 6,
      title: "async/await 與 forEach 裡面無效，執行順序該怎麼解？",
    },
    {
      id: 5,
      status: "已解決",
      time: "5 天前",
      count: 1,
      title: "iOS Safari 的 100vh 導致下方被擋，網址列怎麼辦？",
    },
    {
      id: 6,
      status: "熱議中",
      time: "1 週前",
      count: 15,
      title: "npm run build 打包後圖片全部 404，本機開發是正常的",
    },
  ];

  return (
    <section className="qa-section position-relative overflow-hidden bg-neutral-700 text-white p-12px">
      <div
        className="position-absolute top-0 start-0 w-100 h-100 "
        style={{
          backgroundImage: `url(${qaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
          pointerEvents: "none", // 讓滑鼠穿透，不要擋到點擊
          zIndex: 1,
        }}
      ></div>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* 標題區塊：Flexbox 讓標題靠左，查看更多靠右 */}
        <div className="d-flex justify-content-between align-items-center mb-36px qa-title">
          <h2 className="h4 glow-title mb-0">問答社群</h2>
          {/* <a href="#" className="text-decoration-none text-neutral-50">
                        查看更多  <i className="bi bi-caret-right-fill"></i>
                    </a> */}
          <Link className=" text-decoration-none text-neutral-50" to="/Qna">
            查看更多
            <i className="bi bi-caret-right-fill"></i>
          </Link>
        </div>
      </div>

      {/* Swiper 區塊 */}
      <Swiper
        modules={[Pagination, Navigation]} // 啟用模組
        spaceBetween={24} // 卡片之間的間距 (px)
        pagination={{ clickable: true }} // 手機版的圓點
        // 👇 關鍵：RWD 設定 (Mobile First)
        breakpoints={{
          // 0px ~ 768px (手機): 顯示 1 張
          0: {
            slidesPerView: 1,
          },
          // 768px 以上 (平板): 顯示 2 張
          768: {
            slidesPerView: 2.25,
          },
          // 992px 以上 (桌機): 顯示 3 張
          992: {
            slidesPerView: 3.25,
          },
        }}
        className="pb-5" // 底部留白給圓點
      >
        {/* 用 map 渲染出多張 Slide */}
        {qaList.map((item) => (
          <SwiperSlide key={item.id}>
            <QACard
              status={item.status}
              time={item.time}
              title={item.title}
              answerCount={item.count}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default QASection;
