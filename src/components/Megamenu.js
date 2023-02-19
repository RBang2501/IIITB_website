import * as React from 'react';
import '../assets/styles/megamenu.css';
import { Button, ButtonGroup, Paper, Divider, Stack, Menu, MenuItem } from '@mui/material';
import Fade from '@mui/material/Fade';

export const Megamenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currSec1, setCurrSec1] = React.useState("Centers");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleContentChange = (heading) => {
    setCurrSec1(heading)
  }

  const Sec1Elements = []
  const Sec2Elements = []
  const Sec1Array = ["Centers", "Labs", "Outreach", "Publications", "Policy"]
  const Sec2Contents = {
    "Centers":  ["cen", "cen1", "cen2", "cen3"],
    "Labs" :    ["lab", "lab1", "lab2", "lab3"],
    "Outreach" :["out", "out1", "out2", "out3"],
    "Publications" : ["pub", "pub1", "pub2", "pub3"],
    "Policy" :    ["pol", "pol1", "pol2", "pol3"],
  }

  for(let heading of Sec1Array){
    Sec1Elements.push(
      <MenuItem onMouseOver={()=>{handleContentChange(heading)}}>{heading}</MenuItem>
    )
  }
  for(let subHeading of Sec2Contents[currSec1])
      Sec2Elements.push(
        <MenuItem onClick={handleClose}>{subHeading}</MenuItem>
      )

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
        {/* <Button sx={{ ':hover': { bgcolor: 'pink', color: 'white', }, }} variant='outlined'>Campus Life</Button>
        <Button sx={{ ':hover': { bgcolor: 'pink', color: 'white', }, }} variant='outlined'>Media</Button>
        <Button sx={{ ':hover': { bgcolor: 'pink', color: 'white', }, }} variant='outlined'>People</Button>
        <Button sx={{ ':hover': { bgcolor: 'pink', color: 'white', }, }} variant='outlined'>About Us</Button>
        <Button sx={{ ':hover': { bgcolor: 'pink', color: 'white', }, }} variant="outlined">Primary</Button>
        <Button sx={{ ':hover': { bgcolor: 'pink', color: 'white', }, }} variant="outlined" disabled>
          Disabled
        </Button> */}

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
            {Sec1Elements}
          </Stack>

          <Divider variant='middle'color='black' sx={{ borderRightWidth: 1 }}/>
          <Stack direction='column'>
            {Sec2Elements}
          </Stack>
        </Stack>

      </Menu>
    </div>
  );
}