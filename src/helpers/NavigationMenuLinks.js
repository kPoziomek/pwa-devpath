import React from 'react';

import { Link } from 'react-router-dom';

import { List, Typography, ListItemIcon } from '@mui/material';
import { useTranslation } from 'react-i18next';
export const NavigationMenuLinks = ({
  to,

  Icon,
  routeName,
  handleCloseNavMenu,
}) => {
  const { t } = useTranslation();
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
          {t(routeName)}
        </Typography>
      </ListItemIcon>
    </List>
  );
};
export { NavigationMenuLinks as default } from './NavigationMenuLinks.js';
