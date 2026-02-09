import './FilterBlock.scss';

const FilterBlock = ({
  title,
  options,
  selectedItems,
  onToggle,
  filterType
}) => {
  return (
    <div className="product_filter_block">
      <h5 className="product_filter_title">
        {title}
      </h5>
      <div className="product_filter_options">
        {options.map((option) => {
          const isSelected = selectedItems.includes(option.id);
          return (
            <label
              key={option.id}
              className={`product_filter_item ${isSelected ? 'product_filter_item_active' : ''}`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggle(filterType, option.id)}
                className="product_filter_checkbox"
              />
              <span className="product_filter_label">{option.label}</span>
              {option.count && (
                <span className="product_filter_count">({option.count})</span>
              )}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBlock;
