// src/TestSwiper.jsx

import React from "react";
// 1. 導入 Swiper 核心元件
import { Swiper, SwiperSlide } from "swiper/react";
// 2. 導入所需的 Swiper 模組
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// 3. 導入 Swiper 樣式
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 定義輪播圖內容的樣式
const slideStyle = {
  height: "250px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#ffffff",
  borderRadius: "8px",
};

const TestSwiper = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
      }}
    >
      <h2>獨立的輪播組件 (TestSwiper)</h2>

      <Swiper
        // 配置輪播模組
        modules={[Navigation, Pagination, Autoplay]}
        // 設定間距、每頁顯示數量
        spaceBetween={30}
        slidesPerView={1}
        // 啟用導航箭頭和分頁點
        navigation
        pagination={{ clickable: true }}
        // 設定自動播放
        autoplay={{
          delay: 3500, // 3.5 秒切換一次
          disableOnInteraction: false, // 用戶操作後不停止自動播放
        }}
        // 設定樣式讓它居中且寬度適中
        style={{
          width: "90%",
          margin: "20px auto",
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        <SwiperSlide>
          <div
            style={{
              ...slideStyle,
              background: "linear-gradient(45deg, #4F46E5, #8B5CF6)",
            }}
          >
            第一張圖片
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              ...slideStyle,
              background: "linear-gradient(45deg, #10B981, #06B6D4)",
            }}
          >
            第二張圖片 (自動播放中...)
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              ...slideStyle,
              background: "linear-gradient(45deg, #F97316, #EF4444)",
            }}
          >
            第三張圖片
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestSwiper;
