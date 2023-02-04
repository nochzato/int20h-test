import React from "react";
import { Link } from "react-router-dom";
import classes from "./RecepiesItem.module.css";

export interface RecepiesItemProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const RecepiesItem: React.FC<RecepiesItemProps> = (props) => {
  return (
    <div className={classes.item_container}>
      <Link to={'/recepies/' + props.idMeal}>
        <img src={props.strMealThumb} alt="receipe" />
      </Link>
      <span>{props.strMeal}</span>
    </div>
  );
};

export default RecepiesItem;
