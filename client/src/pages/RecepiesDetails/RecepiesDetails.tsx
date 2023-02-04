import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./RecepiesDetails.module.css";

const RecepiesDetails = () => {
  const { idMeal } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recepie, setRecepie] = useState<any>({});

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

  return (
    <div className={classes.details_container}>
      {!isLoading && (
        <>
          <h2>{recepie.strMeal}</h2>
          <img src={recepie.strMealThumb} alt="" />
          <h3>Ingredients</h3>
          <ul className={classes.details_list}>
            {recepie.ingredientsWithMeasures.map((item: any) => {
              return (
                <li key={Math.random()}>
                  {item.ingredient} {item.measure}
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
            src={recepie.strYoutube.replace('watch?v=', 'embed/')}
          ></iframe>
        </>
      )}
    </div>
  );
};

export default RecepiesDetails;
