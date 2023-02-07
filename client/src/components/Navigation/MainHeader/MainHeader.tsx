import { AnyAction } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store";
import { logoutRequest } from "../../../store/auth-slice";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const dispatch = useDispatch();
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
        {isLogin && (
          <>
            <Link to="/profile">My lists</Link>
            <Link
              to="/"
              onClick={() => {
                dispatch(logoutRequest() as unknown as AnyAction);
              }}
            >
              Logout
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default MainHeader;
