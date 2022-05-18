import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const NavigationMenuButtons = ({
  id,
  to,
  routeName,
  handleCloseNavMenu,
}) => {
  console.log(id, to, routeName);
  return (
    <Button
      component={Link}
      key={id}
      to={to}
      onClick={handleCloseNavMenu}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      {routeName}
    </Button>
  );
};
export { NavigationMenuButtons as default } from './NavigationMenuButtons.js';
