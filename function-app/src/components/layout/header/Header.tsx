import React, { useState } from 'react';
import { AppBar, Icon, IconButton, Toolbar } from '@material-ui/core';

import Drawer from '../drawer/CustomDrawer';
import './Header.scss';
import { INPUT_KEYS } from '../../utils/keycodes';
import Logo from '../logo/Logo';
import Right from './right/Right';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === INPUT_KEYS.TAB || event.key === INPUT_KEYS.SHIFT)) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" className="header">
      <Toolbar className="toolbar">
        <div>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={toggleDrawer(true)}
          >
            <Icon>menu</Icon>
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
          >
            <Logo/>
          </IconButton>
        </div>

        <Right/>
      </Toolbar>
      <Drawer open={drawerOpen} toggleDrawer={toggleDrawer}/>
    </AppBar>
  );
}

export default Header;
