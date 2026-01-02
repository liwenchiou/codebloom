//TODO:
import bgpng from "../../assets/images/index/inTopBg.png";
function IndexTop() {
  return (
    <div
      className="container-fulid p-0"
      style={{
        height: "997px",
        backgroundImage: `url(${bgpng})`, // 替換成你的圖片網址或路徑
        backgroundSize: "cover", // 關鍵：填滿整個區塊且保持比例
        backgroundPosition: "center", // 關鍵：圖片置中
        backgroundRepeat: "no-repeat", // 關鍵：不重複
      }}
    >
      <div className="container">
        <div className="row pt-226px">
          <div className="col-md-6 col-12">
            <div className="mb-160px">
              <h1 className="IndexTop-title mb-12px">
                新手工程師的
                <br />
                <span className="IndexTop-title-span">作品舞台</span>
              </h1>
              <p className="text-xl text-neutral-100">
                從萌芽到綻放的技術社群。
                <br />
                分享你的專案，交流開發經驗，在這裡找到志同道合的夥伴。
              </p>
            </div>
            <div class="container">
              <div class="row text-center align-items-center">
                <div class="col-md-4 pe-5">
                  <h2 class="text-5xl text-fw-700 mb-0 text-start text-neutral-white">
                    1,200+
                  </h2>
                  <p class="text-xl text-neutral-200 text-start">專案作品</p>
                </div>

                <div class="col-md-4 border-start border-secondary ps-5">
                  <h2 class="text-5xl text-fw-700 mb-0 text-start text-neutral-white">
                    3,500+
                  </h2>
                  <p class="text-xl text-neutral-200 text-start">社群成員</p>
                </div>

                <div class="col-md-4 border-start border-secondary ps-5">
                  <h2 class="text-5xl text-fw-700 mb-0 text-start text-neutral-white">
                    800+
                  </h2>
                  <p class="text-xl text-neutral-200 text-start">技術文章</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexTop;
