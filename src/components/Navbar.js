import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import college_logo from "../assets/college_logo.jpg";
import silver_jublee from "../assets/Silver.png";
import { width } from '@mui/system';
import { lightBlue } from '@mui/material/colors';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar style={{ position: "relative" }}>
            <img
              style={{
                position: "absolute",
                height: "100%",
                width: "135px",
                left: "0px",
              }}
              src={college_logo}
            />
            <Toolbar>
              <div style={{ paddingLeft: "115px" }}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </div>

              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "& > *": {
                    m: 1,
                  },
                }}
              >
                <ButtonGroup
                  variant="text"
                  aria-label="text button group"
                  color="inherit"
                >
                  <Button>IQAC</Button>
                  <Button>NIRF</Button>
                  <Button>Campus-Tour</Button>
                  <Button>Sitemap</Button>
                </ButtonGroup>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar style={{ position: "relative", height: "32px" }}>
            <img
              style={{
                position: "absolute",
                height: "100%",
                width: "135px",
                left: "0px",
              }}
              src={silver_jublee}
            />
            <Toolbar>
              <div style={{paddingLeft: "132px"}}>
                <Button
                  variant="text"
                  color="inherit"
                  style={{
                    position: "relative",
                    fontSize: "13px",
                    top: "0%",
                    transform: "translateY(-44%)",
                  }}
                >
                  Research
                </Button>

                <Button
                  variant="text"
                  color="inherit"
                  style={{
                    position: "relative",
                    fontSize: "13px",
                    top: "0%",
                    transform: "translateY(-44%)",
                  }}
                >
                  Academics
                </Button>

                <Button
                  variant="text"
                  color="inherit"
                  style={{
                    position: "relative",
                    fontSize: "13px",
                    top: "0%",
                    transform: "translateY(-44%)",
                  }}
                >
                  Campus-Life
                </Button>

                <Button
                  variant="text"
                  color="inherit"
                  style={{
                    position: "relative",
                    fontSize: "13px",
                    top: "0%",
                    transform: "translateY(-44%)",
                  }}
                >
                  Media
                </Button>

                <Button
                  variant="text"
                  color="inherit"
                  style={{
                    position: "relative",
                    fontSize: "13px",
                    top: "0%",
                    transform: "translateY(-44%)",
                  }}
                >
                  People
                </Button>
                <Button
                  variant="text"
                  color="inherit"
                  style={{
                    position: "relative",
                    fontSize: "13px",
                    top: "0%",
                    transform: "translateY(-44%)",
                  }}
                >
                  About
                </Button>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Box>
      </div>
    </>
  );
}