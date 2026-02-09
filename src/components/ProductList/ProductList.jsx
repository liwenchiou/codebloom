import React, { useState, useMemo } from "react";
import "./ProductList.scss";
import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";
import ProductFilterSidebar from "./ProductFilterSidebar";



// 模擬產品數據
const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "TravelMates 旅伴媒合平台",
    description: "一個連結旅遊愛好者的實時媒合平台，支援地圖搜尋和行程規劃",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    author: "陳冠宇",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chen",
    tags: ["React", "Node.js", "Google Maps API"],
    category: "Web應用",
    difficulty: "中級",
    views: 1234,
    likes: 456,
    isLiked: false,
    releaseDate: "2024-01-15",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 2,
    title: "FinanceGo 智慧理財儀表板",
    description: "個人理財管理工具，提供投資組合分析和智能推薦",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    author: "Sarah Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web應用",
    difficulty: "中級",
    views: 2345,
    likes: 678,
    isLiked: false,
    releaseDate: "2024-01-20",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 3,
    title: "Vue3 極簡音樂播放器",
    description: "輕量級的音樂播放應用，支援播放列表和本地存儲",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
    author: "楊子萱",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yang",
    tags: ["Vue3", "SCSS", "LocalStorage"],
    category: "Web應用",
    difficulty: "初級",
    views: 890,
    likes: 234,
    isLiked: false,
    releaseDate: "2024-01-10",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 4,
    title: "React 拖曳式看板",
    description: "任務管理工具，支援拖曳式排序和多列狀態管理",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    author: "Oliver Brown",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver",
    tags: ["React", "TypeScript", "Zustand"],
    category: "Web應用",
    difficulty: "中級",
    views: 3456,
    likes: 890,
    isLiked: false,
    releaseDate: "2024-01-25",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 5,
    title: "Next.js 響應式部落格模板",
    description: "現代化的部落格框架，支援 Markdown 和暗黑模式",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    author: "林雅婷",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lin",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Web應用",
    difficulty: "中級",
    views: 2123,
    likes: 567,
    isLiked: false,
    releaseDate: "2024-01-18",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 6,
    title: "TypeScript 實用工具庫",
    description: "常用的 TypeScript 工具函數集合，完全類型安全",
    image:
      "https://images.unsplash.com/photo-1517694712162-7d3acad4aae4?w=400&h=300&fit=crop",
    author: "廖英隆",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liao",
    tags: ["TypeScript", "Node.js", "Jest"],
    category: "工具",
    difficulty: "初級",
    views: 1567,
    likes: 345,
    isLiked: false,
    releaseDate: "2024-01-12",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 7,
    title: "React Native 天氣應用",
    description: "跨平台天氣應用，支援即時更新和位置定位",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08f?w=400&h=300&fit=crop",
    author: "張琳",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang",
    tags: ["React Native", "TypeScript", "Expo"],
    category: "移動應用",
    difficulty: "中級",
    views: 1890,
    likes: 423,
    isLiked: false,
    releaseDate: "2024-01-22",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 8,
    title: "GraphQL 電商 API",
    description: "完整的電商後端 API，支援分頁和複雜查詢",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    author: "黃俊傑",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Huang",
    tags: ["GraphQL", "Node.js", "MongoDB"],
    category: "Web應用",
    difficulty: "進階",
    views: 2567,
    likes: 678,
    isLiked: false,
    releaseDate: "2024-01-28",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 9,
    title: "UI 組件庫 (Vue 3)",
    description: "高度可自訂的 Vue 3 組件庫，包含常用 UI 組件",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    author: "王美琪",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wang",
    tags: ["Vue3", "Vite", "Storybook"],
    category: "UI組件庫",
    difficulty: "中級",
    views: 3234,
    likes: 856,
    isLiked: false,
    releaseDate: "2024-01-16",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 10,
    title: "Python 數據分析教學",
    description: "完整的 Python 數據分析教程，包含實戰案例",
    image:
      "https://images.unsplash.com/photo-1518932945970-6a6c343d70d5?w=400&h=300&fit=crop",
    author: "李建偉",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Li",
    tags: ["Python", "Pandas", "Jupyter"],
    category: "教學案例",
    difficulty: "初級",
    views: 4567,
    likes: 1023,
    isLiked: false,
    releaseDate: "2024-01-05",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 11,
    title: "Docker 容器化最佳實踐",
    description: "Docker 實戰教程，涵蓋容器構建和編排",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab2c3bfd7?w=400&h=300&fit=crop",
    author: "吳修德",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wu",
    tags: ["Docker", "DevOps", "Kubernetes"],
    category: "教學案例",
    difficulty: "進階",
    views: 2890,
    likes: 567,
    isLiked: false,
    releaseDate: "2024-01-08",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 12,
    title: "Tailwind CSS 設計系統",
    description: "基於 Tailwind 的完整設計系統和最佳實踐",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    author: "何紹琪",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=He",
    tags: ["Tailwind CSS", "Design System", "React"],
    category: "UI組件庫",
    difficulty: "初級",
    views: 3456,
    likes: 789,
    isLiked: false,
    releaseDate: "2024-01-11",
    demoUrl: "#",
    sourceUrl: "#",
  },
];

const ProductListComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSort, setSelectedSort] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const itemsPerPage = 12;

  // 篩選和搜尋邏輯
  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];

    // 搜尋篩選
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          product.author.toLowerCase().includes(query),
      );
    }

    // 技術棧篩選
    if (selectedTechnologies.length > 0) {
      result = result.filter((product) =>
        selectedTechnologies.some((tech) => product.tags.includes(tech)),
      );
    }

    // 難度篩選
    if (selectedDifficulties.length > 0) {
      result = result.filter((product) =>
        selectedDifficulties.includes(product.difficulty),
      );
    }

    // 分類篩選
    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category),
      );
    }

    // 排序
    switch (selectedSort) {
      case "popular":
        result.sort((a, b) => b.views - a.views);
        break;
      case "liked":
        result.sort((a, b) => b.likes - a.likes);
        break;
      case "latest":
      default:
        result.sort(
          (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate),
        );
        break;
    }

    return result;
  }, [
    searchQuery,
    selectedTechnologies,
    selectedDifficulties,
    selectedCategories,
    selectedSort,
  ]);

  // 處理搜尋變化
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // 重置為第一頁
  };

  // 技術棧篩選處理
  const handleTechnologyToggle = (tech) => {
    setSelectedTechnologies((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
    setCurrentPage(1);
  };

  // 難度篩選處理
  const handleDifficultyToggle = (difficulty) => {
    setSelectedDifficulties((prev) =>
      prev.includes(difficulty)
        ? prev.filter((d) => d !== difficulty)
        : [...prev, difficulty],
    );
    setCurrentPage(1);
  };

  // 分類篩選處理
  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
    setCurrentPage(1);
  };

  // 排序變化處理
  const handleSortChange = (sortType) => {
    setSelectedSort(sortType);
    setCurrentPage(1);
  };

  // 篩選選項定義
  const technologies = [
    { id: "React", label: "React" },
    { id: "Vue3", label: "Vue3" },
    { id: "Next.js", label: "Next.js" },
    { id: "Node.js", label: "Node.js" },
    { id: "TypeScript", label: "TypeScript" },
    { id: "Tailwind CSS", label: "Tailwind CSS" },
    { id: "SCSS", label: "SCSS" },
    { id: "Docker", label: "Docker" },
  ];

  const difficulties = [
    { id: "初級", label: "初級" },
    { id: "中級", label: "中級" },
    { id: "進階", label: "進階" },
  ];

  const categories = [
    { id: "Web應用", label: "Web 應用" },
    { id: "教學案例", label: "教學案例" },
    { id: "UI組件庫", label: "UI 組件庫" },
  ];

  const sortOptions = [
    { id: "latest", label: "最新發布" },
    { id: "popular", label: "熱門瀏覽" },
    { id: "liked", label: "最多點讚" },
  ];

  return (
<div className="container" >
          <div
        className="pt-5"
        
      >
        <div className="row g-4">
          {/* 左側: 產品列表 */}
          <div className="col-lg-10">
            {/* 搜尋框 */}
            <div className="product_search_wrapper mb-4">
              <ProductSearch onSearch={handleSearch} />
            </div>

            {/* 結果信息 */}
            <div className="product_results_info mb-3 text-base text-neutral-white">
              <p className="product_results_count">
                找到{" "}
                <span className="product_highlight">
                  {filteredProducts.length}
                </span>{" "}
                個作品
              </p>
            </div>

            {/* 手機版: 篩選按鈕 */}
            <button
              className="btn btn-outline-primary w-100 mb-3 d-lg-none"
              onClick={() => setIsMobileFilterOpen(true)}
            >
              篩選選項 <i className="bi bi-funnel ms-2" />
            </button>

            {/* 產品網格 (Bootstrap 列) */}
            {filteredProducts.length > 0 ? (
              <>
                <div className="row g-4">
                  {filteredProducts
                    .slice(
                      (currentPage - 1) * itemsPerPage,
                      currentPage * itemsPerPage,
                    )
                    .map((product) => (
                      <div key={product.id} className="col-12 col-md-6 col-lg-4">
                        <ProductCard data={product} />
                      </div>
                    ))}
                </div>

                {/* 分頁 */}
                {Math.ceil(filteredProducts.length / itemsPerPage) > 1 && (
                  <div className="d-flex align-items-center mt-4">
                    <button
                      className="btn btn-outline-secondary me-2"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(1, prev - 1))
                      }
                      disabled={currentPage === 1}
                    >
                      上一頁
                    </button>

                    <div className="d-flex flex-wrap align-items-center">
                      {Array.from({
                        length: Math.min(
                          5,
                          Math.ceil(filteredProducts.length / itemsPerPage),
                        ),
                      }).map((_, index) => {
                        const totalPages = Math.ceil(
                          filteredProducts.length / itemsPerPage,
                        );
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = index + 1;
                        } else if (currentPage <= 3) {
                          pageNum = index + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + index;
                        } else {
                          pageNum = currentPage - 2 + index;
                        }

                        return (
                          <button
                            key={pageNum}
                            className={`btn me-2 ${
                              currentPage === pageNum ? "btn-primary" : "btn-outline-secondary"
                            }`}
                            onClick={() => setCurrentPage(pageNum)}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      className="btn btn-outline-secondary ms-2"
                      onClick={() =>
                        setCurrentPage((prev) =>
                          Math.min(
                            Math.ceil(filteredProducts.length / itemsPerPage),
                            prev + 1,
                          ),
                        )
                      }
                      disabled={
                        currentPage ===
                        Math.ceil(filteredProducts.length / itemsPerPage)
                      }
                    >
                      下一頁
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="product_empty_state  text-neutral-white">
                <div className="product_empty_icon">🔍</div>
                <h3>找不到符合條件的作品</h3>
                <p>請嘗試調整搜尋條件或篩選條件</p>
              </div>
            )}
          </div>

          {/* 右側: 篩選邊欄 */}
          <div className="col-lg-2">
            <ProductFilterSidebar
              technologies={technologies}
              difficulties={difficulties}
              categories={categories}
              sortOptions={sortOptions}
              selectedTechnologies={selectedTechnologies}
              selectedDifficulties={selectedDifficulties}
              selectedCategories={selectedCategories}
              selectedSort={selectedSort}
              onTechnologyToggle={handleTechnologyToggle}
              onDifficultyToggle={handleDifficultyToggle}
              onCategoryToggle={handleCategoryToggle}
              onSortChange={handleSortChange}
              isMobileOpen={isMobileFilterOpen}
              onCloseMobile={() => setIsMobileFilterOpen(false)}
            />
          </div>
        </div>
      </div>
</div>

  );
};

export default ProductListComponent;
