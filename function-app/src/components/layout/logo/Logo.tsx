import React from 'react';

import logo from '../../../assets/logo.png';
import './Logo.scss';

const Logo = () => {
  return (
    <span className="logo">
          <img src={logo} className="App-logo" alt="logo"/>
          <span>Function</span>
    </span>
  );
}

export default Logo;