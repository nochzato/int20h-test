import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RecepiesItemProps } from "../../components/Recepies/RecepiesItem/RecepiesItem";
import RecepiesList, {
  RecepiesListProps,
} from "../../components/Recepies/RecepiesList/RecepiesList";
import { RootState } from "../../store";
import { ColorRing } from "react-loader-spinner";

import classes from "./RecepiesPage.module.css";

const RecepiesPage = () => {
  const mainIngredient = useSelector<RootState, string>(
    (state) => state.products.mainProduct
  );

  const [recepies, setRecepies] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const url = "http://localhost:8080/recipes";

    setIsLoading(true);

    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ main_ingredient: mainIngredient }),
    })
      .then((res) => {
        return res.json();
      })
      .then((recepies) => {
        console.log(recepies);
        setRecepies(recepies);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [mainIngredient]);

  return (
    <div className={classes.recepies_page_container}>
      <div className={classes.recepies_page_header}>
        <Link to="/">Back to products</Link>
        <h2>List of recepies</h2>
      </div>
      <ColorRing
        visible={isLoading}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      {!isLoading && <RecepiesList recepies={recepies} />}
    </div>
  );
};

export default RecepiesPage;
