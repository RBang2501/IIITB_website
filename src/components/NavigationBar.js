import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';

import Fade from '@mui/material/Fade';

import { ButtonGroup, Paper, Divider, Stack, Menu, MenuItem } from '@mui/material';


import college_logo from "../assets/iiitb_logo.png"
import jublee from "../assets/jublee.png"

export const NavigationBar = () => {
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
    "Centers": ["cen", "cen1", "cen2", "cen3"],
    "Labs": ["lab", "lab1", "lab2", "lab3"],
    "Outreach": ["out", "out1", "out2", "out3"],
    "Publications": ["pub", "pub1", "pub2", "pub3"],
    "Policy": ["pol", "pol1", "pol2", "pol3"],
  }

  for (let heading of Sec1Array) {
    let bgcolor = "white";
    if(currSec1 == heading)
      bgcolor = "grey"
    Sec1Elements.push(
      <MenuItem style={{ fontFamily: 'kanit', background: bgcolor}} onMouseOver={() => { handleContentChange(heading) }}>{heading}</MenuItem>
    )
  }
  for (let subHeading of Sec2Contents[currSec1])
    Sec2Elements.push(
      <MenuItem style={{ fontFamily: 'kanit', }} onClick={handleClose}>{subHeading}</MenuItem>
    )

  return (
    <>
      <Navbar className='mb-0 shadow pt-3 pb-2' bg="light" expand="lg">
        <Container fluid style={{ width: '96%' }}>
          <Navbar.Brand href="#">
            <img
              src={college_logo}
              // width="30"
              height="100px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 mx-auto d-block w-100"
              style={{ maxHeight: '100px' }}
            // navbarScroll
            >
              {/* <div className='mx-auto'> */}
              <h3 className='fw-bold text-center mb-3' style={{ fontFamily: 'kanit', fontWeight: '700' }}>
                International Institute of Information Technology
                <mark style={{ background: 'None', color: 'rgb(6,82,154)' }}>Bangalore</mark>
              </h3>
              <hr className='w-100 mx-auto my-0 py-0' />
              {/* </div> */}
              <div className='mx-auto w-100 row'>
                <div className='col-8 megamenu-links'>
                  <Nav.Link className='text-center' style={{ fontFamily: 'kanit', display: 'inline-block' }} href="#action1" onMouseOver={handleClick} onClick={handleClose}>Research</Nav.Link>
                  <Nav.Link className='text-center' style={{ fontFamily: 'kanit', display: 'inline-block' }} href="#action2">Academics</Nav.Link>
                  <Nav.Link className='text-center' style={{ fontFamily: 'kanit', display: 'inline-block' }} href="#action3">Campus Life</Nav.Link>
                  <Nav.Link className='text-center' style={{ fontFamily: 'kanit', display: 'inline-block' }} href="#action4">Media</Nav.Link>
                  <Nav.Link className='text-center' style={{ fontFamily: 'kanit', display: 'inline-block' }} href="#action5">People</Nav.Link>
                  <Nav.Link className='text-center' style={{ fontFamily: 'kanit', display: 'inline-block' }} href="#action6">About Us</Nav.Link>
                </div>
                <div className='col-4' style={{ textAlign: 'end' }}>
                  <Nav.Link className='border-end  text-center' style={{ fontFamily: 'kanit', display: 'inline-block', color: 'rgb(6,82,154)' }} href="#action1">NIRF</Nav.Link>
                  <Nav.Link className='border-start   text-center' style={{ fontFamily: 'kanit', display: 'inline-block', color: 'rgb(6,82,154)' }} href="#action2">IQAC</Nav.Link>
                  <Nav.Link className='border-start   text-center' style={{ fontFamily: 'kanit', display: 'inline-block', color: 'rgb(6,82,154)' }} href="#action2"><Input placeholder="Search" className='megamenu-search' style={{ display: 'inline-block', width: '100px' }} /><SearchIcon /></Nav.Link>
                </div>


              </div>
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
                  <Stack style={{width: '150px' }} direction='column'>
                    {Sec1Elements}
                  </Stack>

                  <Divider variant='middle' color='grey' sx={{ borderRightWidth: 1 }} />
                  <Stack style={{width: '150px' }} direction='column'>
                    {Sec2Elements}
                  </Stack>

                  <Divider variant='middle' color='grey' sx={{ borderRightWidth: 1 }} />

                  <div className='py-2 pe-2' style={{width:'200px', fontFamily:'kanit'}}>
                    <h6>Featured Posts</h6>
                    <hr className='text-secondary'/>
                    <img width={180} src={jublee}/>
                    <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>

                </Stack>

              </Menu>

            </Nav>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
            <Navbar.Brand href="#" className='me-0'>
              <img
                src={jublee}
                // width="30"
                height="100px"
                className="d-inline-block align-top "
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <hr className='mt-2 shadow pb-0'></hr> */}
    </>
  );
}