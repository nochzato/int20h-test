import React from "react";

import classes from "./Form.module.css";

interface FormProps {
  submitHandler: () => void;
  buttonCaption: string;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <div className={classes.form_container}>
      <form className={classes.form}>
        <label htmlFor="email" className={classes.label}>
          Email:
        </label>
        <input id="email" type="email" className={classes.input}></input>
        <label htmlFor="password" className={classes.label}>
          Password:
        </label>
        <input id="password" type="password" className={classes.input}></input>
        <button type="submit">{props.buttonCaption}</button>
      </form>
    </div>
  );
};

export default Form;
