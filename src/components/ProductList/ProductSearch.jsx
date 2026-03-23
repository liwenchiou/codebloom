import React, { useState } from "react";
import "./ProductSearch.scss";

const ProductSearch = ({ onSearch, placeholder = "搜尋產品名稱或技術..." }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearchValue("");
    onSearch("");
  };

  return (
    <div className="product_search">
      <div className="product_search_input_wrapper">
        <svg
          className="product_search_icon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>

      <label htmlFor="product-search" className="visually-hidden">
          搜尋產品
        </label>
        <input
          type="text"
          id="product-search"
          className="product_search_input"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleChange}
          aria-label="搜尋產品"
        />

        {searchValue && (
          <button
            className="product_clear_btn"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
