import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const NavigationMenuButtons = ({
  id,
  to,
  routeName,
  handleCloseNavMenu,
}) => {
  const { t } = useTranslation();

  return (
    <Button
      component={Link}
      key={id}
      to={to}
      onClick={handleCloseNavMenu}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      {t(routeName)}
    </Button>
  );
};
export { NavigationMenuButtons as default } from './NavigationMenuButtons.js';
