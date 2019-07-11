import React from 'react';
import { Container, AppBar, Toolbar, IconButton, Grid } from '@material-ui/core';

import logo from '../../assets/logo.png';

import './Header.scss';

function Header() {
  return (
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
          >
            <img src={logo} className="App-logo" alt="logo"/>
            Function
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}

export default Header;
