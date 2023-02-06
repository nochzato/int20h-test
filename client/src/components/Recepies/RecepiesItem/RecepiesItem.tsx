import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./RecepiesItem.module.css";

export interface RecepiesItemProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  missingIngredients: string[];
}

const RecepiesItem: React.FC<RecepiesItemProps> = (props) => {
  return (
    <div className={`${classes.item_container}`}>
      <Link to={"/recepies/" + props.idMeal}>
        <img
          src={props.strMealThumb}
          className={`${
            props.missingIngredients.length === 0
              ? classes.ready
              : classes.not_ready
          } `}
          alt="receipe"
        />
      </Link>
      <span>{props.strMeal}</span>
      <span>
        {props.missingIngredients.length !== 0
          ? `Need ${props.missingIngredients.length} more ingredients to cook!`
          : "Ready to cook!"}
      </span>
    </div>
  );
};

export default RecepiesItem;
