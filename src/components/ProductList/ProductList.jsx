import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./ProductList.scss";
import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";
import ProductFilterSidebar from "./ProductFilterSidebar";

const API_BASE = import.meta.env.VITE_API_BASE;

const ProductListComponent = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSort, setSelectedSort] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const itemsPerPage = 12;

  // 從 API 取得作品資料
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${API_BASE}/portfolio`);
        const data = res.data;

        // 直接使用 API 資料，補上 ProductCard 需要但 API 沒提供的預設值
        const mapped = data.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description || "",
          image: item.image || "",
          author: item.author,
          avatar: item.avatar || "",
          tags: item.tags || [],
          category: item.category || "Web應用",
          difficulty: item.difficulty || "中級",
          views: item.views || 0,
          likes: item.likes || 0,
          isLiked: item.isLiked || false,
          releaseDate: item.releaseDate || "2024-01-01",
          demoUrl: item.demoUrl || "#",
          sourceUrl: item.sourceUrl || "#",
        }));

        setProducts(mapped);
      } catch (err) {
        console.error("取得作品資料失敗:", err);
        setError("無法載入作品列表，請稍後再試");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  // 篩選和搜尋邏輯
  const filteredProducts = useMemo(() => {
    let result = [...products];

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
    products,
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

  // Loading 狀態
  if (isLoading) {
    return (
      <div className="container d-flex justify-content-center align-items-center py-5" style={{ minHeight: "400px" }}>
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">載入中...</span>
        </div>
      </div>
    );
  }

  // Error 狀態
  if (error) {
    return (
      <div className="container text-center text-neutral-white py-5">
        <h5>{error}</h5>
        <button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>重新載入</button>
      </div>
    );
  }

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
                      <div key={product.id} className="col-md-6 col-lg-4">
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
                            className={`btn me-2 ${currentPage === pageNum ? "btn-primary" : "btn-outline-secondary"
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
