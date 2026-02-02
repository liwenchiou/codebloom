import React from "react";
import "./ProductTop.scss";

const ProductTop = () => {
  return (
    <div className="product_top">
      <div className="product_top_content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="product_top_text">
                <h1 className="product_top_title">
                  發現優質
                  <span className="highlight"> 產品</span>
                </h1>
                <p className="product_top_subtitle">
                  精選來自全球開發者的各類優秀產品和教學案例
                </p>
                <p className="product_top_description">
                  從 Web 應用到移動端，從開源工具到完整框架，
                  探索豐富的技術解決方案和學習資源
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="product_top_visual">
                <div className="visual-cards">
                  <div className="visual-card card-1">
                    <div className="card-content">
                      <div className="card-icon">🚀</div>
                      <span>高效</span>
                    </div>
                  </div>
                  <div className="visual-card card-2">
                    <div className="card-content">
                      <div className="card-icon">💡</div>
                      <span>創新</span>
                    </div>
                  </div>
                  <div className="visual-card card-3">
                    <div className="card-content">
                      <div className="card-icon">⚡</div>
                      <span>實用</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTop;
