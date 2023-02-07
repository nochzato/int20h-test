import React from "react";
import Form from "../../components/UI/Form/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { showErrorNotification } from "../../util/notifications";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler: (name: string|undefined, email: string, password: string) => void = (
    name: string|undefined,
    email: string,
    password: string
  ) => {
    fetch("http://13.39.107.58:8080/auth", {
      method: "post",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if(res.status === 200){
          dispatch(authActions.login());
          navigate("/");
        }else {
          showErrorNotification('Enter valid credentials!');
        }
      })
      .catch((err) => {
        showErrorNotification('Something went wrong!');
      });
  };

  return (
    <div>
      <Form submitHandler={loginHandler} buttonCaption="Sign In" hasName={false} />
    </div>
  );
};

export default LoginPage;
