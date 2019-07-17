import React, { useState } from 'react';
import { AppBar, Icon, IconButton, Toolbar } from '@material-ui/core';

import Drawer from '../drawer/CustomDrawer';
import './Header.scss';
import { INPUT_KEYS } from '../../../commons/utils/keycodes';
import Logo from '../logo/Logo';

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
      <Toolbar>
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
      </Toolbar>
      <Drawer open={drawerOpen} toggleDrawer={toggleDrawer}/>
    </AppBar>
  );
}

export default Header;
