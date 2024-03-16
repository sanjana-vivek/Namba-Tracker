import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'; // Import the icon for redirection

const pages = [['Track Your Bus', "./maps.png"], ['Virtual Travel Buddy', "./hanshake.png"], ['Seats Available', "./seat.png"], ["Emergency Helpline", "./emergency.png"]];
const settings = ['Profile', 'Account', 'Ticket Details', 'Logout'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ width: '100vw', overflowX: 'hidden' }} style={{ outline: 'none', backgroundColor: '#60cc9c' }}>
      <Container maxWidth="100vw">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{ outline: 'none' }}
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
              onClose={handleCloseNavMenu}
              sx={{
                display: 'block',
                left: 0, // Position the dropdown to the left
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={page[0]}
                  onClick={handleCloseNavMenu}
                  sx={{
                    width: '40vw', // Set width to 40%vw
                    padding: '0.75rem', // Increase padding
                    paddingLeft: '2rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div style={{display:'flex', alignItems:'center'}}>
                    <img src={page[1]} style={{marginRight:'0.75rem',height:'1rem'}}></img>
                    <Typography>{page[0]}</Typography>
                    </div>
                    <NavigateNextIcon style={{ color: '#333' }} /> {/* Icon for redirection */}
                  </div>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
                outline: 'none',
              }}
            >
              Namba Tracker
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="./logo.png"
              alt="Your Logo"
              style={{
                height: '40px',
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
              style={{ outline: 'none' }}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
