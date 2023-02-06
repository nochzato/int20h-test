import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const isLogin = useSelector<RootState, boolean>(
    (state) => state.auth.isLogin
  );

  return (
    <header className={classes.main_header}>
      <h1>
        <Link to="/">My Recipe Book</Link>
      </h1>
      <div className={classes.sign_links}>
        {!isLogin && (
          <>
            <Link to="/registration">Sign up</Link>
            <Link to="/login">Sign in</Link>
          </>
        )}
        {isLogin && <>
          <Link to="/profile">My lists</Link>
          <Link to="/">Logout</Link>
          </>
        }
      </div>
    </header>
  );
};

export default MainHeader;
