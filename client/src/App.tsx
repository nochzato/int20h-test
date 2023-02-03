import React from 'react';
import './App.css';
import MainHeader from './components/Navigation/MainHeader/MainHeader';
import RecepiesPage from './pages/RecipesPage/RecepiesPage';
import FilterPage from './components/Filter/Filter';
import ProductsPage from './pages/ProductsPage/ProductsPage';

const DUMMY_USER_PRODUCTS = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6'];

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <div className="App_container">
        <ProductsPage/>
        <FilterPage/>
      </div>
    </div>
  );
}

export default App;
