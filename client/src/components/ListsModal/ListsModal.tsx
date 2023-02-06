import React, { useRef, useState } from "react";
import classes from "./ListsModal.module.css";

interface ListModalProps {
  onCloseModal: () => void;
  onAddToList: (title: string) => void;
}

const ListsModal: React.FC<ListModalProps> = (props) => {
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [lists, setLists] = useState<string[]>([]);

  const newListInputRef = useRef<HTMLInputElement>(null);

  const cancelCreatingHandler = () => {
    setIsCreatingNew(false);
  };

  const createNewHandler = () => {
    setIsCreatingNew(true);
  };

  const addNewListHandler = () => {
    const newList = newListInputRef.current!.value;
    setLists([...lists, newList]);
    setIsCreatingNew(false);
  }

  return (
    <div className={classes.lists_modal}>
      <button onClick={props.onCloseModal}>×</button>
      <ul className={classes.lists}>
        {lists.map((list) => {
          return (
            <li key={Math.random()} className={classes.lists_item}>
              <span>{list}</span>
              <button onClick={props.onAddToList.bind(this, list)}>+</button>
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
      </ul>
    </div>
  );
};

export default ListsModal;
