import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';


import college_logo from "../assets/iiitb_logo.png"
import jublee from "../assets/jublee.png"

export const NavigationBar = () => {
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
                  <Nav.Link className='text-center' style={{ fontFamily: 'kanit', display: 'inline-block' }} href="#action1">Research</Nav.Link>
                  <Nav.Link className='text-center' style={{ fontFamily: 'kanit', display: 'inline-block' }} href="#action2">Academics</Nav.Link>
                  <Nav.Link className='text-center' style={{ fontFamily: 'kanit', display: 'inline-block' }} href="#action3">Campus Life</Nav.Link>
                  <Nav.Link className='text-center' style={{ fontFamily: 'kanit', display: 'inline-block' }} href="#action4">Media</Nav.Link>
                  <Nav.Link className='text-center' style={{ fontFamily: 'kanit', display: 'inline-block' }} href="#action5">People</Nav.Link>
                  <Nav.Link className='text-center' style={{ fontFamily: 'kanit', display: 'inline-block' }} href="#action6">About Us</Nav.Link>
                </div>
                <div className='col-4' style={{ textAlign: 'end' }}>
                  <Nav.Link className='border-end  text-center' style={{ fontFamily: 'kanit', display: 'inline-block', color: 'rgb(6,82,154)' }} href="#action1">NIRF</Nav.Link>
                  <Nav.Link className='border-start   text-center' style={{ fontFamily: 'kanit', display: 'inline-block', color: 'rgb(6,82,154)' }} href="#action2">IQAC</Nav.Link>
                  <Nav.Link className='border-start   text-center' style={{ fontFamily: 'kanit', display: 'inline-block', color: 'rgb(6,82,154)' }} href="#action2"><Input placeholder="Search" className='megamenu-search' style={{display:'inline-block', width:'100px'}} /><SearchIcon/></Nav.Link>
                </div>


              </div>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
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