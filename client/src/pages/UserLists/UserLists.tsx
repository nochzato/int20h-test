import React, { useState, useEffect } from "react";
import classes from "./UserLists.module.css";
import { ColorRing } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

const UserLists = () => {
  const [lists, setLists] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/lists", { credentials: "include" })
      .then((res) => {
        if(res.status === 401){
          navigate('/login');
          return;
        }
        
        return res.json();
      })
      .then((lists) => {
        console.log(lists);
        setLists(lists);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={classes.user_lists_container}>
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
        <ul className={classes.lists_container}>
          {lists.map((list) => {
            return (
              <li key={Math.random()} className={classes.lists_item}>
                <span className={classes.lists_title}>{list.title}</span>
                <ul className={classes.recipe_container}>
                  {list.recipes.map((recipe: any) => {
                    return (
                      <li key={Math.random()} className={classes.recipe_item}>
                        <Link to={'/recepies/' + recipe.id}>
                          <span>{recipe.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default UserLists;
