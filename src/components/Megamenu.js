import * as React from 'react';
import '../assets/styles/megamenu.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Divider } from '@mui/material';

export const Megamenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='m-3'>
      <Button
        id="fade-button"
        variant='outlined'
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Research
      </Button>

      <Stack direction="row" spacing={2}>
        <Button id='megamenu-button' variant='outlined'>Academics</Button>
        <Button className='megamenu-button' variant='outlined'>Campus Life</Button>
        <Button className='megamenu-button' variant='outlined'>Media</Button>
        <Button className='megamenu-button' variant='outlined'>People</Button>
        <Button className='megamenu-button' variant='outlined'>About Us</Button>
        <Button className='megamenu-button' variant="outlined">Primary</Button>
        <Button className='megamenu-button' variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </Stack>

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <Divider style={{ margin: '0.1px 0px 0.1px 0px' }} />
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider style={{ margin: '0.1px 0px 0.1px 0px' }} />
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}