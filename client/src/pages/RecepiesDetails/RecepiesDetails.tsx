import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import classes from "./RecepiesDetails.module.css";
import { ColorRing } from "react-loader-spinner";
import ListsModal from "../../components/ListsModal/ListsModal";
import Backdrop from "../../components/Backdrop/Backdrop";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { userProducts } from "../../store/products-slice";

const RecepiesDetails = () => {
  const { idMeal } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recepie, setRecepie] = useState<any>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const userProducts = useSelector<RootState, userProducts[]>(
    (state) => state.products.userProducts
  );
  
  const isEnough = (ingredient: string) => {
    const ifAdded = !!userProducts.find(product => {
      return (product.title.toUpperCase() === ingredient.toUpperCase());
    })
    if(ifAdded){
      return null;
    }

    return <span style={{color: 'red', fontSize: '1.5rem'}}>-</span>
  }

  useEffect(() => {
    const url = "http://localhost:8080/recipes/";

    setIsLoading(true);

    fetch(url + idMeal)
      .then((res) => {
        return res.json();
      })
      .then((recepie) => {
        console.log(recepie);
        setRecepie(recepie);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idMeal]);

  const openModalHandler = () => {
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    document.body.style.overflow = "";
    setIsModalOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className={classes.details_container}>
        <ColorRing
          visible={isLoading}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
        {!isLoading && (
          <>
            <h2>{recepie.strMeal}</h2>
            <img src={recepie.strMealThumb} alt="" />
            <h3>Ingredients</h3>
            <ul className={classes.details_list}>
              {recepie.ingredientsWithMeasures.map((item: any) => {
                return (
                  <li key={Math.random()}>
                    {item.ingredient} {item.measure} {isEnough(item.ingredient)}
                  </li>
                );
              })}
            </ul>
            <h3>Instructions</h3>
            <p>{recepie.strInstructions}</p>
            <iframe
              title="youtube-video"
              width="420"
              height="315"
              src={recepie.strYoutube.replace("watch?v=", "embed/")}
            ></iframe>
            <button onClick={openModalHandler}>Add to list</button>
          </>
        )}
      </div>
      {isModalOpen && (
        <>
          <ListsModal onCloseModal={closeModalHandler} />
          <Backdrop />
        </>
      )}
    </div>
  );
};

export default RecepiesDetails;
