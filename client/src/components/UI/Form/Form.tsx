import React, { useRef } from "react";

import classes from "./Form.module.css";

interface FormProps {
  submitHandler: (
    name: string | undefined,
    email: string,
    password: string
  ) => void;
  buttonCaption: string;
  hasName: boolean;
}

const Form: React.FC<FormProps> = (props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={classes.form_container}>
      <form
        className={classes.form}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          props.submitHandler.call(
            this,
            nameInputRef.current?.value || undefined,
            emailInputRef.current!.value,
            passwordInputRef.current!.value
          );
        }}
      >
        <label htmlFor="email" className={classes.label}>
          Email:
        </label>
        <input
          id="email"
          type="email"
          className={classes.input}
          ref={emailInputRef}
        ></input>
        {props.hasName && (
          <>
            <label htmlFor="name" className={classes.label}>
              Name:
            </label>
            <input
              id="name"
              type="text"
              className={classes.input}
              ref={nameInputRef}
            ></input>
          </>
        )}
        <label htmlFor="password" className={classes.label}>
          Password:
        </label>
        <input
          id="password"
          type="password"
          className={classes.input}
          ref={passwordInputRef}
        ></input>
        <button type="submit">{props.buttonCaption}</button>
      </form>
    </div>
  );
};

export default Form;
