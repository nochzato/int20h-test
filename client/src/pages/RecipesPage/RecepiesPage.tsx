import React from "react";
import { Link } from "react-router-dom";
import RecepiesList from "../../components/Recepies/RecepiesList/RecepiesList";

import classes from "./RecepiesPage.module.css";

const DUMMY_RECEPIES = [
  {
    id: 1,
    title: "Receipe_1",
    imgUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
  },
  {
    id: 2,
    title: "Receipe_2",
    imgUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
  },
  {
    id: 3,
    title: "Receipe_3",
    imgUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
  },
  {
    id: 4,
    title: "Receipe_4",
    imgUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
  },
  {
    id: 5,
    title: "Receipe_5",
    imgUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
  },
  {
    id: 6,
    title: "Receipe_6",
    imgUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
  },
  {
    id: 7,
    title: "Receipe_7",
    imgUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
  },
  {
    id: 8,
    title: "Receipe_8",
    imgUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
  },
];

const RecepiesPage = () => {
  return (
    <div className={classes.recepies_page_container}>
      <div className={classes.recepies_page_header}>
        <Link to="/">Back to products</Link>
        <h2>List of recepies</h2>
      </div>
      <RecepiesList recepies={DUMMY_RECEPIES} />
    </div>
  );
};

export default RecepiesPage;
