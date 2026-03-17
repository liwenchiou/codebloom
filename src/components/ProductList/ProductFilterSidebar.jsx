import FilterBlock from './FilterBlock';
import './ProductFilterSidebar.scss';

const ProductFilterSidebar = ({
  technologies,
  difficulties,
  categories,
  sortOptions,
  selectedTechnologies,
  selectedDifficulties,
  selectedCategories,
  selectedSort,
  onTechnologyToggle,
  onDifficultyToggle,
  onCategoryToggle,
  onSortChange,
  isMobileOpen,
  onCloseMobile
}) => {
  const handleFilterToggle = (filterType, itemId) => {
    switch (filterType) {
      case 'technology':
        onTechnologyToggle(itemId);
        break;
      case 'difficulty':
        onDifficultyToggle(itemId);
        break;
      case 'category':
        onCategoryToggle(itemId);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* 背景遮罩 (手機版) */}
      {isMobileOpen && (
        <div className="product_filter_overlay" onClick={onCloseMobile} />
      )}

      {/* 篩選邊欄容器 */}
      <div className={`product_filter_sidebar ${isMobileOpen ? 'product_filter_sidebar_show' : ''}`}>
        {/* 手機版: 關閉按鈕 */}
        <div className="product_filter_header d-lg-none">
          <h5 className="text-white mb-0">篩選選項</h5>
          <button
            className="btn-close btn-close-white"
            onClick={onCloseMobile}
            aria-label="Close filters"
          />
        </div>

        {/* 排序區塊 */}
        <div className="product_filter_block">
          <h5 className="product_filter_title">排序</h5>
          <div className="product_filter_options">
            {sortOptions.map((option) => (
              <label
                key={option.id}
                className={`product_filter_item ${
                  selectedSort === option.id ? 'product_filter_item_active' : ''
                }`}
              >
                <input
                  type="radio"
                  name="sort"
                  value={option.id}
                  checked={selectedSort === option.id}
                  onChange={() => onSortChange(option.id)}
                  className="product_filter_checkbox"
                />
                <span className="product_filter_label">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 技術棧篩選 */}
        <FilterBlock
          title="技術棧"
          options={technologies}
          selectedItems={selectedTechnologies}
          onToggle={handleFilterToggle}
          filterType="technology"
        />

        {/* 難度篩選 */}
        <FilterBlock
          title="難度等級"
          options={difficulties}
          selectedItems={selectedDifficulties}
          onToggle={handleFilterToggle}
          filterType="difficulty"
        />

        {/* 分類篩選 */}
        <FilterBlock
          title="專案分類"
          options={categories}
          selectedItems={selectedCategories}
          onToggle={handleFilterToggle}
          filterType="category"
        />

        {/* 手機版: 完成篩選按鈕 */}
        <button
          className="btn btn-primary mt-24px d-lg-none"
          onClick={onCloseMobile}
        >
          完成篩選
        </button>
      </div>
    </>
  );
};

export default ProductFilterSidebar;
