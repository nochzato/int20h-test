import React from "react";
import RecepiesItem, { RecepiesItemProps } from "../RecepiesItem/RecepiesItem";

import classes from './RecepiesList.module.css';

export interface RecepiesListProps {
  recepies: RecepiesItemProps[];
}

const RecepiesList: React.FC<RecepiesListProps> = (props) => {
  return (
    <div className={classes.recepies_list}>
      {props.recepies.map((recepie) => {
        return (
          <RecepiesItem
            key={recepie.idMeal}
            idMeal={recepie.idMeal}
            strMeal={recepie.strMeal}
            strMealThumb={recepie.strMealThumb}
          />
        );
      })}
    </div>
  );
};

export default RecepiesList;
