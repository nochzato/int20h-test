import React, { useState, ChangeEvent, useEffect } from "react";

import classes from "./ProductsSearch.module.css";

interface ProductsSearchProps {
  onSearch: (query: string) => void;
}

const ProductsSearch: React.FC<ProductsSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const debouncingTimer = setTimeout(() => onSearch(searchQuery), 500);

    return () => {
      clearTimeout(debouncingTimer);
    }

  }, [searchQuery, onSearch])

  return (
    <div className={classes.products_search_container}>
      <form className={classes.products_search_form}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(e.currentTarget.value);
          }}
        />
        {/* <button type="submit">Search products</button> */}
      </form>

      <div className={classes.products_search_categories}>
        <div>
          <label htmlFor="c1">Category 1</label>
          <input type="checkbox" id="c1" />
        </div>
        <div>
          <label htmlFor="c2">Category 2</label>
          <input type="checkbox" id="c2" />
        </div>
        <div>
          <label htmlFor="c3">Category 3</label>
          <input type="checkbox" id="c3" />
        </div>
        <div>
          <label htmlFor="c4">Category 4</label>
          <input type="checkbox" id="c4" />
        </div>
        <div>
          <label htmlFor="c5">Category 5</label>
          <input type="checkbox" id="c5" />
        </div>
        <div>
          <label htmlFor="c6">Category 6</label>
          <input type="checkbox" id="c6" />
        </div>
      </div>
    </div>
  );
};

export default ProductsSearch;
