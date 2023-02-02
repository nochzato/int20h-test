import React from 'react';
import './App.css';
import MainHeader from './components/Navigation/MainHeader/MainHeader';
import RecepiesPage from './pages/RecipesPage/RecepiesPage';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <RecepiesPage/>
    </div>
  );
}

export default App;
