import { useState, useEffect } from "react";
import axios from "axios";
import bgpng from "../../assets/images/index/inTopBg.png";
import WordCloudComponent from "../WordCloudComponent/WordCloudComponent";
import WordCloudComponentMobile from "../WordCloudComponent/WordCloudComponentMobile";

const API_BASE = import.meta.env.VITE_API_BASE;

function IndexTop() {
  const [tagsData, setTagsData] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await axios.get(`${API_BASE}/portfolio`);
        // 統計每個 tag 出現的次數
        const tagCount = {};
        res.data.forEach((item) => {
          if (Array.isArray(item.tags)) {
            item.tags.forEach((tag) => {
              tagCount[tag] = (tagCount[tag] || 0) + 1;
            });
          }
        });

        // 轉換成 WordCloud 需要的 [tag, weight] 格式
        // weight 以出現次數為基礎，乘上倍率讓字型大小有明顯差異
        const formatted = Object.entries(tagCount)
          .map(([tag, count]) => [tag, count * 10 + 20])
          .sort((a, b) => b[1] - a[1]); // 出現越多越大

        setTagsData(formatted);
      } catch (err) {
        console.error("取得作品標籤失敗:", err);
      }
    };

    fetchTags();
  }, []);

  return (
    <div
      className="container-fluid p-0"
      style={{
        backgroundImage: `url(${bgpng})`, // 替換成你的圖片網址或路徑
        backgroundSize: "cover", // 關鍵：填滿整個區塊且保持比例
        backgroundPosition: "center", // 關鍵：圖片置中
        backgroundRepeat: "no-repeat", // 關鍵：不重複
      }}
    >
      <div className="container">
        {/* 桌機板 */}
        <div className="row pt-226px d-none d-lg-flex align-items-center">
          <div className="col-md-6">
            <div className="mb-56px">
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
            <div className="container">
              <div className="row text-center align-items-center">
                <div className="col-md-4 pe-5">
                  <h2 className="text-5xl text-fw-700 mb-0 text-start text-neutral-white">
                    1,200+
                  </h2>
                  <p className="text-xl text-neutral-200 text-start">專案作品</p>
                </div>

                <div className="col-md-4 border-start border-secondary ps-5">
                  <h2 className="text-5xl text-fw-700 mb-0 text-start text-neutral-white">
                    3,500+
                  </h2>
                  <p className="text-xl text-neutral-200 text-start">社群成員</p>
                </div>

                <div className="col-md-4 border-start border-secondary ps-5">
                  <h2 className="text-5xl text-fw-700 mb-0 text-start text-neutral-white">
                    800+
                  </h2>
                  <p className="text-xl text-neutral-200 text-start">技術文章</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-160px">
            <WordCloudComponent data={tagsData} />
          </div>
        </div>
        {/* 手機板 */}
        <div className="row pt-3 d-lg-none flex-column-reverse">
          <div className="col-12 mb-240px">
            <div className="mt-56px">
              <h1 className="IndexTop-title mb-12px">
                新手工程師的
                <br />
                <span className="IndexTop-title-span">作品舞台</span>
              </h1>
            </div>
            <div className="container">
              <div className="row text-center align-items-center">
                <div className="col-4 pe-4">
                  <h2 className="text-2xl text-fw-700 mb-0 text-start text-neutral-white">
                    1,200+
                  </h2>
                  <p className="text-sm text-neutral-200 text-start">專案作品</p>
                </div>

                <div className="col-4 border-start border-secondary ps-4">
                  <h2 className="text-2xl text-fw-700 mb-0 text-start text-neutral-white">
                    3,500+
                  </h2>
                  <p className="text-sm text-neutral-200 text-start">社群成員</p>
                </div>

                <div className="col-4 border-start border-secondary ps-4">
                  <h2 className="text-2xl text-fw-700 mb-0 text-start text-neutral-white">
                    800+
                  </h2>
                  <p className="text-sm text-neutral-200 text-start">技術文章</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <WordCloudComponentMobile data={tagsData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexTop;
