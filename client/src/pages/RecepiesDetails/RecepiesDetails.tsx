import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import classes from "./RecepiesDetails.module.css";
import { ColorRing } from "react-loader-spinner";
import ListsModal from "../../components/ListsModal/ListsModal";
import Backdrop from "../../components/Backdrop/Backdrop";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { userProducts } from "../../store/products-slice";
import { showWarningNotification } from "../../util/notifications";
import { log } from "console";

const RecepiesDetails = () => {
  const { idMeal } = useParams();
  const isLogin = useSelector<RootState, boolean>(state => state.auth.isLogin);
  const navigate = useNavigate();
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
    if(!isLogin){
      showWarningNotification('Please sign in!');
      navigate('/login');
      return;
    }
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    document.body.style.overflow = "";
    setIsModalOpen(false);
  };

  const addToListHandler = (title: string) => {
    console.log(typeof idMeal);
    const url = "http://localhost:8080/lists";
    fetch(url, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        recipeId: idMeal
      })
    })
    .then(res => {
      return res.json();
    })
    .then(list => {
      console.log(list);
    })
    .catch(err => {
      console.log(err);
    })
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
              className={classes.iframe}
              src={recepie.strYoutube.replace("watch?v=", "embed/")}
            ></iframe>
            <button onClick={openModalHandler}>Add to list</button>
          </>
        )}
      </div>
      {isModalOpen && (
        <>
          <ListsModal onCloseModal={closeModalHandler} onAddToList={addToListHandler}/>
          <Backdrop />
        </>
      )}
    </div>
  );
};

export default RecepiesDetails;
