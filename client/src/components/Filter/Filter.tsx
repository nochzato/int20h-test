import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { productsActions, productsSlice } from "../../store/products-slice";
import classes from "./Filter.module.css";

const Filter: React.FC = () => {
  const { userProducts, mainProduct } = useSelector<RootState, productsSlice>(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const deleteProductHandler = (product: string) => {
    dispatch(productsActions.deleteProduct(product));
  };

  const addMainProductHandler = (product: string) => {
    dispatch(productsActions.addMainProduct(product));
  };

  const deleteMainProductHandler = () => {
    dispatch(productsActions.deleteMainProduct());
  }

  return (
    <div className={classes.filter_container}>
      <div className={classes.filter_main_product}>
        <span>Main Product</span>
        {mainProduct && (
          <div className={classes.main_product_container}>
            <button onClick={deleteMainProductHandler}>×</button>
            <span>{mainProduct}</span>
          </div>
        )}
      </div>
      <ul className={classes.filter_list}>
        {userProducts.map((product) => {
          return (
            <li key={Math.random()} className={classes.filter_list_item}>
              <button onClick={deleteProductHandler.bind(this, product)}>
                ×
              </button>
              <span>{product}</span>
              <button onClick={addMainProductHandler.bind(this, product)}>
                Main product
              </button>
            </li>
          );
        })}
      </ul>
      <button className={classes.filter_search_btn}>Search recepies</button>
    </div>
  );
};

export default Filter;
