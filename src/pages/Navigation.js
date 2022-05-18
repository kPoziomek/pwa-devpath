import { useState } from 'react';

import { Box, Container } from '@mui/system';
import { AppBar, Toolbar, IconButton, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationMenuButtons from '../helpers/NavigationMenuButtons';
import NavigationMenuLinks from '../helpers/NavigationMenuLinks';
import { appRoutes } from '../helpers/LinksDb.js';

//TODO: poprawić zamykanie menu nawigacji
const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
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
            </Menu>
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
