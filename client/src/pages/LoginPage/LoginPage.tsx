import React from "react";
import Form from "../../components/UI/Form/Form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const loginHandler: (name: string|undefined, email: string, password: string) => void = (
    name: string|undefined,
    email: string,
    password: string
  ) => {
    fetch("http://localhost:8080/auth", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form submitHandler={loginHandler} buttonCaption="Sign In" hasName={false} />
    </div>
  );
};

export default LoginPage;
