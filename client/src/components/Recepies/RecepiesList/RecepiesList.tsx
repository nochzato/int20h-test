import React from "react";
import RecepiesItem, { RecepiesItemProps } from "../RecepiesItem/RecepiesItem";

import classes from './RecepiesList.module.css';

interface RecepiesListProps {
  recepies: RecepiesItemProps[];
}

const RecepiesList: React.FC<RecepiesListProps> = (props) => {
  return (
    <div className={classes.recepies_list}>
      {props.recepies.map((recepie) => {
        return (
          <RecepiesItem
            key={recepie.id}
            id={recepie.id}
            title={recepie.title}
            imgUrl={recepie.imgUrl}
          />
        );
      })}
    </div>
  );
};

export default RecepiesList;
