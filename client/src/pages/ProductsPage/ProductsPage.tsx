import React, { useCallback, useState } from "react";
import ProductsList from "../../components/Products/ProductsList/ProductsList";
import ProductsSearch from "../../components/Products/ProductsSearch/ProductsSearch";
import { ColorRing } from "react-loader-spinner";
import classes from "./ProductsPage.module.css";

const ProductsPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<string[]>([]);

  const searchProductsHandler = useCallback(async (query: string) => {
    const url = "http://35.181.51.198:8080/ingredients";
    setIsLoading(true);

    if (!query) {
      try {
        const response = await fetch(url);
        const ingredients = await response.json();
        setProducts(ingredients.ingredients);
        setIsLoading(false);
        return;
      } catch (err) {
        console.log(err);
        return;
      }
    }

    try {
      const response = await fetch(url + "/" + query);
      const ingredients = await response.json();
      setProducts(ingredients.ingredients);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      return;
    }
  }, []);

  return (
    <div className={classes.products_page_container}>
      <ProductsSearch onSearch={searchProductsHandler} />
      <ColorRing
        visible={isLoading}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      {!isLoading && <ProductsList products={products} />}
    </div>
  );
};

export default ProductsPage;
