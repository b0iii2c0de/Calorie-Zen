import React from 'react';
import headerLogo from '../images/headerLogo.png';

const Header = () => {
  return (
    <header className="">
      <img alt='logo' src={headerLogo}/>
      <h1>Calorie-Zen</h1>
    </header>
  )
}

export default Header