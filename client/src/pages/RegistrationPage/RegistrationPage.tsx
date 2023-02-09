import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/UI/Form/Form";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const registrationHandler: (
    name: string | undefined,
    email: string,
    password: string
  ) => void = (name: string | undefined, email: string, password: string) => {
    fetch("http://35.181.51.198:8080/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form
        submitHandler={registrationHandler}
        buttonCaption="Sign up"
        hasName={true}
      />
    </div>
  );
};

export default RegistrationPage;
