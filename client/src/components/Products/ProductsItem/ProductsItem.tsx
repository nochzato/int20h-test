import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { productsActions, userProducts } from "../../../store/products-slice";
import classes from "./ProductsItem.module.css";

export interface ProductsItemProps {
  title: string;
}

const ProductsItem: React.FC<ProductsItemProps> = (props) => {
  const dispatch = useDispatch();
  const userProducts = useSelector<RootState, userProducts[]>(state => state.products.userProducts);

  const isAdded = !!userProducts.find((product) => {
    return (product.title === props.title) && (product.isAdded);
  })

  const addProductHandler = (e: any) => {
    if(isAdded){
        return;
    }

    dispatch(productsActions.addProduct(e.currentTarget.dataset.prodtitle));
  };

  return (
    <div
      className={`${classes.product_item_container} ${
        isAdded ? classes.added : ""
      }`}
      data-prodtitle={props.title}
      onClick={addProductHandler}
    >
      <span>{props.title}</span>
    </div>
  );
};

export default ProductsItem;
