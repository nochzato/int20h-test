import React from "react";
import { Link } from "react-router-dom";
import classes from "./RecepiesItem.module.css";

export interface RecepiesItemProps {
  id: number;
  imgUrl: string;
  title: string;
}

const RecepiesItem: React.FC<RecepiesItemProps> = (props) => {
  return (
    <div className={classes.item_container}>
      <Link to='/recepies/details'>
        <img src={props.imgUrl} alt="receipe" />
      </Link>
      <span>{props.title}</span>
    </div>
  );
};

export default RecepiesItem;
