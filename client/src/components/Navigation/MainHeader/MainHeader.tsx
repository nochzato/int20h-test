import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.main_header}>
      <h1>
        <Link to="/">My Recipe Book</Link>
      </h1>
      <div className={classes.sign_links}>
        <Link to="/registration">Sign up</Link>
        <Link to="/login">Sign in</Link>
      </div>
    </header>
  );
};

export default MainHeader;
