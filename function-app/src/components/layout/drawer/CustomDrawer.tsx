import React from 'react';
import { Divider, Drawer, Icon, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Logo from '../logo/Logo';

const CustomDrawer = (props) => {
  const { open, toggleDrawer } = props;

  const sideList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="drawerBody"
    >
      <Logo/>
      <Divider/>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Icon>backup</Icon>
          </ListItemIcon>
          <ListItemText primary="Analytics"/>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      {sideList()}
    </Drawer>
  )
};
export default CustomDrawer;