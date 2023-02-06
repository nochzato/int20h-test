import React from "react";
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

function App() {
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
