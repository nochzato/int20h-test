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
    </div>
  );
};

export default ProductsSearch;
