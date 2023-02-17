import * as React from 'react';
import '../assets/styles/megamenu.css';
import { Button, ButtonGroup, Paper, Divider, Stack, Menu, MenuItem } from '@mui/material';
import Fade from '@mui/material/Fade';

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
        {/* <ButtonGroup  variant="outlined" aria-label="outlined primary button group" >
          <Button style={{textTransform:'capitalize'}}>Research</Button>
          <Button style={{textTransform:'capitalize'}}>Academics</Button>
          <Button style={{textTransform:'capitalize'}}>Campus Life</Button>
          <Button style={{textTransform:'capitalize'}}>Media</Button>
        </ButtonGroup> */}
        <Button sx={{ bgcolor: 'rgba(77,125,242,.1)', ':hover': { bgcolor: '#e1bee7', color: 'white', }, }} variant='outlined' >Academics</Button>
        <Button sx={{ ':hover': { bgcolor: 'pink', color: 'white', }, }} variant='outlined'>Campus Life</Button>
        <Button sx={{ ':hover': { bgcolor: 'pink', color: 'white', }, }} variant='outlined'>Media</Button>
        <Button sx={{ ':hover': { bgcolor: 'pink', color: 'white', }, }} variant='outlined'>People</Button>
        <Button sx={{ ':hover': { bgcolor: 'pink', color: 'white', }, }} variant='outlined'>About Us</Button>
        <Button sx={{ ':hover': { bgcolor: 'pink', color: 'white', }, }} variant="outlined">Primary</Button>
        <Button sx={{ ':hover': { bgcolor: 'pink', color: 'white', }, }} variant="outlined" disabled>
          Disabled
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
        <Stack direction='row'>
          <Stack direction='column'>
            <MenuItem onClick={handleClose}>Centres</MenuItem>
            <MenuItem onClick={handleClose}>Labs</MenuItem>
            <MenuItem onClick={handleClose}>Outreach</MenuItem>
            <MenuItem onClick={handleClose}>Publications</MenuItem>
            <MenuItem onClick={handleClose}>Policy</MenuItem>
          </Stack>

          <Divider variant='middle'color='black' sx={{ borderRightWidth: 1 }}/>
          <Stack direction='column'>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Stack>
        </Stack>

      </Menu>
    </div>
  );
}