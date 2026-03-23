import React from "react";
import { Link } from "react-router-dom";
import bgpng from "../assets/images/index/inTopBg.png";

const NotFound = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-neutral-700 text-white p-0"
      style={{
        backgroundImage: `url(${bgpng})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center">
        <h1 className="display-1 fw-bold text-primary-500 mb-4 animate__animated animate__fadeInDown">
          404
        </h1>
        <h2 className="h3 mb-4 text-neutral-100 animate__animated animate__fadeInUp">
          糟糕！頁面不見了
        </h2>
        <p className="text-neutral-300 mb-5 animate__animated animate__fadeInUp animate__delay-1s">
          您尋找的頁面可能已被移動、刪除，或正在開發中。
        </p>
        <Link
          to="/"
          className="btn btn-primary px-5 py-3 rounded-pill fw-bold animate__animated animate__fadeInUp animate__delay-2s"
          style={{
            backgroundColor: "#00E5FF",
            color: "#000",
            border: "none",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          返回首頁
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
