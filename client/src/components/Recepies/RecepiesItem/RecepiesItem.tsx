import React from "react";
import classes from "./RecepiesItem.module.css";

export interface RecepiesItemProps {
  id: number;
  imgUrl: string;
  title: string;
}

const RecepiesItem: React.FC<RecepiesItemProps> = (props) => {
  return (
    <div className={classes.item_container}>
      <img src={props.imgUrl} alt="receipe" />
      <span>{props.title}</span>
    </div>
  );
};

export default RecepiesItem;
