import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';

import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';

import Fade from '@mui/material/Fade';

import { ButtonGroup, Paper, Divider, Stack, Menu, MenuItem } from '@mui/material';


import college_logo from "../assets/iiitb_logo.png"
import jublee from "../assets/jublee.png"

export const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currSec1, setCurrSec1] = React.useState("");
  const [currMain, setCurrMain] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setCurrMain("");
  };

  const handleContentChange = (heading) => {
    setCurrSec1(heading)
  }

  const handleMainSelect = (mainHead) => {
    setCurrMain(mainHead)
    setCurrSec1("")
    console.log("main", mainHead)
  }

  const MainElements = []
  const Sec1Elements = []
  const Sec2Elements = []

  const MobileElements = []

  const MainNav = ["Research", "Academics", "Campus Life", "Media", "People", "About Us"]
  const Sec1Array = {
    "": [],
    "Research": ["Centers", "Labs", "Outreach", "Publications", "Policy"],
    "Academics": ["Domains", "Programmes"],
    // , "Admissions", "Placements", "Exchange Program", "Verification Process", "Curriculum", "Programme Outcomes", "Academic Calendar", "Online Education", "Continuing Professional Education"],
    "Campus Life": [],
    "Media": [],
    "People": [],
    "About Us": [],
    // "Campus Life" : ["Committees & Clubs", "Students Events and Festivals","Cafeteria","Library Collection"],
    // "Media" : ["Faculty Articles", "IIITB in the Press","Naviiina","Annual Reports","Press Releases","Media Kit"],
    // "People": ["Faculty", "Staff","Ph.D. Scholars","Alumni","Code Of Conduct"],
    // "About Us": ["Explore IIITB", "Governing Body","Administration","Industry Advisory Board","Institute Industry Interaction Cell","Partnership","AICTE Mandatory Disclosure","IIITB Calendar"],
  }
  const Sec2Contents = {
    "": [],
    "Centers": ["E-Health Research Centre (EHRC)", "Machine Intelligence & Robotics CoE (MINRO)", "Centre for IT & Public Policy (CITAPP)", "Cognitive Computing CoE(CCC)", "COMET Tech Innovation Hub (NM-ICPS)", "IIITB Innovation Centre", "Modular Open-Source Identity Platform (MOSIP)"],
    "Labs": ["Surgical and Assistive Robotics Lab", "Graphics-Visualization-Computing-Lab", "Web Sciene Lab", "Multimodal Perception Lab", "Software Engineering Lab", "High Density Electronics Systems Lab", "Networking and Communication Lab", "Indian Knowledge System Lab", "Smart City Lab", "Ascend Studio", "Radar Sensing Lab"],
    "Outreach": ["Samvad", "RISE", "IMACX Open Innovation Platform (IMACX)"],
    "Publications": [],
    "Policy": [],
    "Domains": ["dom1", "dom2", "dom3"],
    "Programmes": ["pr1", "pr2"],
  }

  for (let mainHead of MainNav) {
    const Sec1MobElements = []
    for (let heading of Sec1Array[mainHead]) {
      const Sec2MobElements = []
      for (let subHeading of Sec2Contents[heading]){
        Sec2MobElements.push(
          <Accordion.Item eventKey={mainHead + heading + subHeading}>
            <Accordion.Header>{subHeading}</Accordion.Header>
          </Accordion.Item>
        )
      }
      Sec1MobElements.push(
              <Accordion.Item eventKey={mainHead + heading}>
                <Accordion.Header>{heading}</Accordion.Header>
                <Accordion.Body>
                  <Accordion>
                    {Sec2MobElements}
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>
      )
    }

    MobileElements.push(
      <Accordion>
        <Accordion.Item eventKey={mainHead}>
          <Accordion.Header>{mainHead}</Accordion.Header>
          <Accordion.Body>
            <Accordion>
              {Sec1MobElements}
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )

    let bgcolor = "white";
    if (currMain == mainHead)
      bgcolor = "grey"
    
    MainElements.push(
      <Nav.Link className='text-center nav-link-desktop' style={{ fontFamily: 'kanit', background: bgcolor }} href="#action1" onClick={(event) => { handleMainSelect(mainHead); handleClick(event) }}>{mainHead}</Nav.Link>
    )
  }

  if (currMain) {
    for (let heading of Sec1Array[currMain]) {
      let bgcolor = "white";
      if (currSec1 == heading)
        bgcolor = "#f4f5fb"
      Sec1Elements.push(
        <MenuItem className='border-bottom border-2 pb-3' style={{ fontFamily: 'kanit', background: bgcolor }} onMouseOver={() => { handleContentChange(heading); }}>{heading}</MenuItem>
      )
    }
    for (let subHeading of Sec2Contents[currSec1])
      Sec2Elements.push(
        <MenuItem className='border-bottom border-2 pb-3' style={{ fontFamily: 'kanit', }} onClick={handleClose}>{subHeading}</MenuItem>
      )
  }

  return (
    <>
      <Navbar expand='lg' className='shadow pt-3 pb-2 mobile-invisible'>
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
            >
              <h3 className='fw-bold text-center mb-3 mobile-invisible' style={{ fontFamily: 'kanit', fontWeight: '700' }}>
                International Institute of Information Technology
                <mark style={{ background: 'None', color: 'rgb(6,82,154)' }}>Bangalore</mark>
              </h3>
              <hr className='w-100 mx-auto my-0 py-0' />
              <div className='mx-auto w-100 row'>
                <div className='col-lg-8 col-12 megamenu-links mobile-invisible'>
                  {MainElements}
                </div>
                <div className='col-lg-4' style={{ textAlign: 'end' }}>
                  <Nav.Link className='border-end  text-center' style={{ fontFamily: 'kanit', display: 'inline-block', color: 'rgb(6,82,154)' }} href="#action1">NIRF</Nav.Link>
                  <Nav.Link className='border-start   text-center' style={{ fontFamily: 'kanit', display: 'inline-block', color: 'rgb(6,82,154)' }} href="#action2">IQAC</Nav.Link>
                  <Nav.Link className='border-start   text-center' style={{ fontFamily: 'kanit', display: 'inline-block', color: 'rgb(6,82,154)' }} href="#action2"><Input placeholder="Search" className='megamenu-search' style={{ display: 'inline-block', width: '100px' }} /><SearchIcon /></Nav.Link>
                </div>


              </div>
              <Menu
                className='mt-2'
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <Stack className='mobile-invisible' direction='row'>
                  { }
                  <Stack className='ps-3' style={{ width: '200px' }} direction='column'>
                    {Sec1Elements}
                  </Stack>

                  {Sec2Contents[currSec1].length == 0 ?
                    <></>
                    :
                    <>
                      <Divider variant='middle' color='#f4f5fb' sx={{ borderRightWidth: 1 }} />
                      <Stack style={{ width: '400px' }} direction='column'>
                        {Sec2Elements}
                      </Stack>
                    </>
                  }

                  <Divider variant='middle' color='grey' sx={{ borderRightWidth: 1 }} />

                  <div className='py-2 pe-2 mobile-invisible' style={{ width: '280px', fontFamily: 'kanit' }}>
                    <h6 className='mb-0' style={{ textTransform: 'uppercase' }}>Featured Posts</h6>
                    <hr className='text-black pb-2 mt-2 pt-0' />
                    <img className='shadow-lg border border-1 ' width={270} src="https://pbs.twimg.com/media/FpKViz1aQAEh_ZT?format=jpg&name=medium" />
                    <p className='mt-2' style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Our students, Kautuk Raj (IMT2019043) and Adrij Sharma (IMT2019004) participated in an international youth summit called Technology for Peace organized in Dumaguete, Philippines as a part of an ongoing European Union project.</p>
                  </div>

                </Stack>
              </Menu>

            </Nav>
            <Navbar.Brand href="#" className='me-0 mobile-invisible tab-invisible'>
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

      <Navbar bg="light" expand='lg' className="mb-3 desktop-invisible">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={college_logo}
              // width="30"
              height="60px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className='col-lg-8 col-12 megamenu-links'>
                  {MobileElements}
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}