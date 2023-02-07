import React, { useEffect, useRef, useState } from "react";
import classes from "./ListsModal.module.css";
import {ColorRing} from 'react-loader-spinner';
import { showWarningNotification } from "../../util/notifications";
import { useNavigate } from "react-router-dom";

interface ListModalProps {
  onCloseModal: () => void;
  onAddToList: (title: string) => void;
}

const ListsModal: React.FC<ListModalProps> = (props) => {
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [lists, setLists] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/lists", { credentials: "include" })
      .then((res) => {
        if(res.status === 401){
          document.body.style.overflow = '';
          navigate('/login');
          return;
        }

        return res.json();
      })
      .then((lists) => {
        const listsTitle = lists.map((list:any) => {
          return list.title;
        })
        setLists(listsTitle);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const newListInputRef = useRef<HTMLInputElement>(null);

  const cancelCreatingHandler = () => {
    setIsCreatingNew(false);
  };

  const createNewHandler = () => {
    setIsCreatingNew(true);
  };

  const addNewListHandler = () => {
    const newList = newListInputRef.current!.value;
    if(lists.includes(newList)){
      showWarningNotification('List with this name already exist!');
      return;
    }
    setLists([...lists, newList]);
    setIsCreatingNew(false);
  };

  return (
    <div className={classes.lists_modal}>
      <button onClick={props.onCloseModal}>×</button>
      <ul className={classes.lists}>
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
            {lists.map((list) => {
              return (
                <li key={Math.random()} className={classes.lists_item}>
                  <span>{list}</span>
                  <button onClick={props.onAddToList.bind(this, list)}>
                    +
                  </button>
                </li>
              );
            })}

            <li className={classes.lists_item}>
              {!isCreatingNew && (
                <>
                  <span>Create new list</span>
                  <button onClick={createNewHandler}>+</button>
                </>
              )}
              {isCreatingNew && (
                <>
                  <button
                    onClick={cancelCreatingHandler}
                    className={classes.close_btn}
                  >
                    ×
                  </button>
                  <input ref={newListInputRef} type="text"></input>
                  <button onClick={addNewListHandler}>+</button>
                </>
              )}
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default ListsModal;
