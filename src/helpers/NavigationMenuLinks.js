import React from 'react';

import { Link } from 'react-router-dom';

import { MenuItem, Typography, ListItemIcon } from '@mui/material';

export const NavigationMenuLinks = ({
  to,

  Icon,
  routeName,
  handleCloseNavMenu,
}) => {
  return (
    <MenuItem to={to} component={Link} onClick={handleCloseNavMenu}>
      <ListItemIcon>
        {Icon}
        <Typography textAlign="center">{routeName}</Typography>
      </ListItemIcon>
    </MenuItem>
  );
};
export { NavigationMenuLinks as default } from './NavigationMenuLinks.js';
