import { useState } from 'react';

import { Box, Container } from '@mui/system';
import { AppBar, Toolbar, IconButton, Menu, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationMenuButtons from '../helpers/NavigationMenuButtons';
import NavigationMenuLinks from '../helpers/NavigationMenuLinks';
import { appRoutes } from '../helpers/LinksDb.js';

const Navigation = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleCloseNavMenu = () => {
    setIsOpenNav(false);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setIsOpenNav(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor={'left'}
              open={isOpenNav}
              sx={{ minWidth: 300 }}
              onClose={() => setIsOpenNav(false)}
            >
              {/* nav on mobile */}
              {appRoutes.map((route) => {
                return (
                  <NavigationMenuLinks
                    key={route.id}
                    id={route.id}
                    to={route.to}
                    routeName={route.routeName}
                    handleCloseNavMenu={handleCloseNavMenu}
                    Icon={route.Icon}
                  ></NavigationMenuLinks>
                );
              })}
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {appRoutes.map((route) => (
              <NavigationMenuButtons
                key={route.id}
                id={route.id}
                to={route.to}
                routeName={route.routeName}
                handleCloseNavMenu={handleCloseNavMenu}
              ></NavigationMenuButtons>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
