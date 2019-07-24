import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Icon,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar
} from '@material-ui/core';

import Drawer from '../drawer/CustomDrawer';
import './Header.scss';
import { INPUT_KEYS } from '../../utils/keycodes';
import Logo from '../logo/Logo';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === INPUT_KEYS.TAB || event.key === INPUT_KEYS.SHIFT)) {
      return;
    }
    setDrawerOpen(open);
  };

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleLogout() {
    handleClose();
  }

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
        <div>
          <IconButton aria-label="Show 4 new mails" color="inherit">
            <Badge badgeContent={25} color="secondary">
              <Icon>mail</Icon>
            </Badge>
          </IconButton>

          <IconButton aria-label="Show 4 new mails" color="inherit">
            <Badge badgeContent={5} color="secondary">
              <Icon>notifications</Icon>
            </Badge>
          </IconButton>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <Avatar alt="Remy Sharp"
                    src="https://lh5.googleusercontent.com/-az99t8E0pxg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfvPfYjLwPMTqxc27uc2tZidUn82w/s96-c/photo.jpg"/>
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Icon>settings</Icon>
              </ListItemIcon>Account
              Settings
            </MenuItem>
            <MenuItem
              onClick={handleLogout}>
              <ListItemIcon>
                <Icon>lock</Icon>
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
      <Drawer open={drawerOpen} toggleDrawer={toggleDrawer}/>
    </AppBar>
  );
}

export default Header;
