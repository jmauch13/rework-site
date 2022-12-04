import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './menu.css';
import logo from '../../assets/capsolutions.gif';
import request from '../../assets/request_1.gif';
import Container from 'react-bootstrap/Container';


function Navigation() {
  

  return (
    

      <Navbar className="navigation">
          <Navbar.Brand className="logo" href="/"><img src={logo} alt='logo'
          style={{
            border: '4px solid lightgray'
          }} /></Navbar.Brand>
          <Nav>
            <Nav.Link>
              {''}
              <Link id="nav-links" to="/">Home</Link>
              </Nav.Link>
              <NavDropdown title="About" id="nav-links">
                <Container className='dropdown-box'>
              <NavDropdown.Item id="nav-item-links">
                {''}
                <Link to="/about">About Us</Link>   
              </NavDropdown.Item>
              <NavDropdown.Item id="nav-item-links">
                {''}
                <Link to="/contact">Contact Us</Link>
              </NavDropdown.Item>
              </Container>
            </NavDropdown>
            <Nav.Link id="nav-links">
              <Link to="/services">Services</Link>
            </Nav.Link>
           
            <Nav.Link id="nav-links">
              <Link to="/request">
                <img src={request} alt='logo'
            style={{
            width: '200px',
            height: '80px',
            border: '4px solid lightgray',
            marginLeft: '310%'
            }} /></Link>
            </Nav.Link>
          </Nav>
      </Navbar>

 )   
}

export default Navigation;
