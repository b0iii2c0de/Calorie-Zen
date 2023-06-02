import React from 'react';
import headerLogo from '../images/headerLogo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" alt="logo" src={headerLogo}/>
      <h1 className="header__header">Calorie-Zen</h1>
    </header>
  )
}

export default Header
