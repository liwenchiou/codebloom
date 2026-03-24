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
      {isMobileOpen && (
        <div className="product_filter_overlay" onClick={onCloseMobile} />
      )}

      <div className={`product_filter_sidebar ${isMobileOpen ? 'product_filter_sidebar_show' : ''}`}>
        <div className="product_filter_header d-lg-none">
          <h5 className="text-white mb-0">篩選選項</h5>
          <button
            className="btn-close btn-close-white"
            onClick={onCloseMobile}
            aria-label="Close filters"
          />
        </div>

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

        <FilterBlock
          title="技術棧"
          options={technologies}
          selectedItems={selectedTechnologies}
          onToggle={handleFilterToggle}
          filterType="technology"
        />

        <FilterBlock
          title="難度等級"
          options={difficulties}
          selectedItems={selectedDifficulties}
          onToggle={handleFilterToggle}
          filterType="difficulty"
        />

        <FilterBlock
          title="專案分類"
          options={categories}
          selectedItems={selectedCategories}
          onToggle={handleFilterToggle}
          filterType="category"
        />

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
