import React from 'react';

import { Link } from 'react-router-dom';

import { List, Typography, ListItemIcon } from '@mui/material';

export const NavigationMenuLinks = ({
  to,

  Icon,
  routeName,
  handleCloseNavMenu,
}) => {
  return (
    <List
      to={to}
      component={Link}
      onClick={handleCloseNavMenu}
      sx={{ p: 2, minWidth: '25%', textDecoration: 'none' }}
    >
      <ListItemIcon>
        {Icon}

        <Typography sx={{ pl: 2, minWidth: '25%', textAlign: 'center' }}>
          {routeName}
        </Typography>
      </ListItemIcon>
    </List>
  );
};
export { NavigationMenuLinks as default } from './NavigationMenuLinks.js';
