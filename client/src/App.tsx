import React, { useEffect } from "react";
import "./App.css";
import MainHeader from "./components/Navigation/MainHeader/MainHeader";
import RecepiesPage from "./pages/RecipesPage/RecepiesPage";
import FilterPage from "./components/Filter/Filter";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import RecepiesDetails from "./pages/RecepiesDetails/RecepiesDetails";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth-slice";
import UserLists from "./pages/UserLists/UserLists";

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    fetch('http://35.181.51.198:8080/check-auth', {credentials: 'include'})
    .then(res => {
      return res.json();
    })
    .then(auth => {
      if(auth.isLoggedIn){
        dispatch(authActions.login());
      }
    })
    .catch(err => {
      console.log(err);
    })
  }, [dispatch])


  return (
    <>
      <div className="App">
        <MainHeader />
        <div className="App_container">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/recepies" element={<RecepiesPage />} />
            <Route path="/recepies/:idMeal" element={<RecepiesDetails />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<UserLists />} />
            <Route path="/*" element={<ProductsPage />} />
          </Routes>
          <FilterPage />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
