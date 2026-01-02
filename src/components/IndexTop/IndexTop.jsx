//TODO:
import bgpng from "../../assets/images/index/inTopBg.png";
import WordCloudComponent from "../WordCloudComponent/WordCloudComponent";
import WordCloudComponentMobile from "../WordCloudComponent/WordCloudComponentMobile";
function IndexTop() {
    const tagsData = [
        ["JavaScript", 80],
        ["React", 65],
        ["Vue.js", 60],
        ["Angular", 50],
        ["Node.js", 55],
        ["Python", 70],
        ["TypeScript", 50],
        ["CSS3", 45],
        ["HTML5", 40],
        ["Docker", 35],
        ["Kubernetes", 30],
        ["AWS", 45],
        ["Firebase", 30],
        ["Git", 35],
        ["GraphQL", 25],
        ["Next.js", 40],
        ["Nuxt", 25],
        ["Svelte", 20],
        ["Tailwind", 35],
        ["Bootstrap", 30],
        ["MongoDB", 28],
        ["SQL", 32],
        ["Rust", 20],
        ["Go", 25],
        ["WebAssembly", 18],
        ["AI/ML", 40],
        ["DevOps", 35],
    ];
    return (
        <div
            className="container-fulid p-0"
            style={{
                // height: "997px",
                backgroundImage: `url(${bgpng})`, // 替換成你的圖片網址或路徑
                backgroundSize: "cover", // 關鍵：填滿整個區塊且保持比例
                backgroundPosition: "center", // 關鍵：圖片置中
                backgroundRepeat: "no-repeat", // 關鍵：不重複
            }}
        >
            <div className="container">
                {/* 桌機板 */}
                <div className="row pt-226px d-lg-flex d-none">
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
                        <WordCloudComponent data={tagsData} />
                    </div>
                </div>
                {/* 手機板 */}
                <div className="row pt-3 d-flex d-lg-none flex-column-reverse">
                    <div className="col-12">
                        <div className="mt-56px">
                            <h1 className="IndexTop-title mb-12px">
                                新手工程師的
                                <br />
                                <span className="IndexTop-title-span">作品舞台</span>
                            </h1>
                        </div>
                        <div class="container ">
                            <div class="row text-center align-items-center">
                                <div class="col-4 pe-4">
                                    <h2 class="text-2xl text-fw-700 mb-0 text-start text-neutral-white">
                                        1,200+
                                    </h2>
                                    <p class="text-sm text-neutral-200 text-start">專案作品</p>
                                </div>

                                <div class="col-4 border-start border-secondary ps-4">
                                    <h2 class="text-2xl text-fw-700 mb-0 text-start text-neutral-white">
                                        3,500+
                                    </h2>
                                    <p class="text-sm text-neutral-200 text-start">社群成員</p>
                                </div>

                                <div class="col-4 border-start border-secondary ps-4">
                                    <h2 class="text-2xl text-fw-700 mb-0 text-start text-neutral-white">
                                        800+
                                    </h2>
                                    <p class="text-sm text-neutral-200 text-start">技術文章</p>
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
