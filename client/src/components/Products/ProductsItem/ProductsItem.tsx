import React from "react";
import { useDispatch } from "react-redux";
import { productsActions } from "../../../store/products-slice";
import classes from "./ProductsItem.module.css";

export interface ProductsItemProps {
  title: string;
}

const ProductsItem: React.FC<ProductsItemProps> = (props) => {
  const dispatch = useDispatch();

  const addProductHandler = (e: any) => {
    dispatch(productsActions.addProduct(e.currentTarget.dataset.prodtitle));
  };

  return (
    <div
      className={classes.product_item_container}
      data-prodtitle={props.title}
      onClick={addProductHandler}
    >
      <span>{props.title}</span>
    </div>
  );
};

export default ProductsItem;
