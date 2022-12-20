import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './menu.css';
import logo from '../../assets/capsolutions.gif';
import request_logo from '../../assets/request_1.gif';
import Container from 'react-bootstrap/Container';

/*function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav className='navigation'>
      <ul>
      <li className="logo"><img src={logo} alt='logo'
          style={{
            border: '4px solid lightgray'
          }} />
          </li>
				<li id="nav-links" className={currentTab === "/homepage"}> 
					<span onClick={() => setCurrentTab("/homepage")}>Home</span>
				</li>
				<li id="nav-links" className={currentTab === "/about"}>
					<span onClick={() => setCurrentTab("/about")}>About</span>
				</li>
				<li id="nav-links" className={currentTab === "/contact"}>
					<span onClick={() => setCurrentTab("/contact")}>Contact</span>
				</li>
				<li id="nav-links" classname={currentTab === "/services"}>
          <span onClick={() => setCurrentTab("/services")}>Services</span>
        </li>
      <li id="nav-links" classname={currentTab === "/request"}> 
      <span onClick={() => setCurrentTab("/request")}>
        <img src={request_logo} alt='logo'
            style={{
            width: '200px',
            height: '80px',
            border: '4px solid lightgray',
            marginLeft: '240%'
            }} /></span>
            </li>
            </ul>
		</nav>
	);
}
export default Navigation;*/

function Navigation() {

  return (
    
      <Navbar className="navigation">
          <Navbar.Brand className="logo" href="/"><img src={logo} alt='logo'
          style={{
            border: '4px solid lightgray'
          }} /></Navbar.Brand>
          <Nav>
            <Nav.Link id="nav-links" href="/">Home</Nav.Link>
            <NavDropdown title="About" id="nav-links">
              <Container className='dropdown-box' id='about-dropdown'>
              <NavDropdown.Item id="nav-item-links" href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item id="nav-item-links" href="/contact">Contact Us</NavDropdown.Item>
              </Container>
            </NavDropdown>
            <NavDropdown title="Services" id="nav-links">
            <Container className='dropdown-box'>
            <NavDropdown.Item id="nav-item-links" href="/television">Television Captioning</NavDropdown.Item>
            <NavDropdown.Item id="nav-item-links" href="/cart">CART Services</NavDropdown.Item>
            <NavDropdown.Item id="nav-item-links" href="/webcast">Webcasts</NavDropdown.Item>
            <NavDropdown.Item id="nav-item-links" href="/transcript">Transcription &#38; Translation</NavDropdown.Item>
            <NavDropdown.Item id="nav-item-links" href="/video">Video Production</NavDropdown.Item>
            </Container>
            </NavDropdown>
            
            <Nav.Link id="nav-links" href="/request"><img src={request_logo} alt='logo'
            style={{
            width: '190px',
            height: '80px',
            border: '4px solid lightgray',
            marginLeft: '275%'
            }} /></Nav.Link>
          </Nav>
      </Navbar>

 )   
}

export default Navigation;