import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { productsActions, productsSlice } from "../../store/products-slice";
import { showErrorNotification } from "../../util/notifications";
import classes from "./Filter.module.css";

const Filter: React.FC = () => {
  const { userProducts, mainProduct } = useSelector<RootState, productsSlice>(
    (state) => state.products
  );

  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteProductHandler = (product: string) => {
    dispatch(productsActions.deleteProduct(product));
  };

  const addMainProductHandler = (product: string) => {
    setError(false);
    dispatch(productsActions.addMainProduct(product));
  };

  const deleteMainProductHandler = () => {
    dispatch(productsActions.deleteMainProduct());
  };

  const searchRecepiesHandler = () => {
    if(!mainProduct){
      showErrorNotification('Please select main product!');
      setError(true);
      return;
    }

    navigate("/recepies");
    return;
  };

  return (
    <div className={classes.filter_container}>
      <div className={classes.filter_main_product}>
        <span className={`${!error ? '' : classes.error}`}>Main Product</span>
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
              <button onClick={deleteProductHandler.bind(this, product.title)}>
                ×
              </button>
              <span>{product.title}</span>
              <button onClick={addMainProductHandler.bind(this, product.title)}>
                Main product
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className={classes.filter_search_btn}
        onClick={searchRecepiesHandler}
      >
        Search recepies
      </button>
    </div>
  );
};

export default Filter;
