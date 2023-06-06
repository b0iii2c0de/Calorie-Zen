import React from 'react';
import './AppContainer.css';
import MealAdder from './MealAdder';

const AppContainer = () => {
  return (
    <ul className="container">
      <li className="calories">
        <h2>Consumed calories:</h2>
      </li>
      <MealAdder />
    </ul>
  );
}

export default AppContainer
