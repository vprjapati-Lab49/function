import React, { useContext } from 'react';
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Icon,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem
} from '@material-ui/core';

import AuthContext from '../../../contexts/AuthContext';

const Right = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const authContext = useContext(AuthContext);

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
        <Avatar alt={authContext.principal.name}
                src={authContext.principal.imageUrl}/>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <ListItemIcon>
            <Avatar alt={authContext.principal.name}
                    src={authContext.principal.imageUrl}/>
          </ListItemIcon>
          {authContext.principal.name}
        </MenuItem>

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
  );
}

export default Right;