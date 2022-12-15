import React from 'react';
/*import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';*/
import './menu.css';
/*import logo from '../../assets/capsolutions.gif';
import request from '../../assets/request_1.gif';
import Container from 'react-bootstrap/Container';*/

function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "landing" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("landing")}>""</span>
				</li>
				<li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("about")}>About</span>
				</li>
				<li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("contact")}>Contact</span>
				</li>
				<li className={currentTab === "cart" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("cart")}>Cart</span>
				</li>
			</ul>
		</nav>
	);
}
export default Navigation;

/*function Navigation() {

  return (
    
      <Navbar className="navigation">
          <Navbar.Brand className="logo" href="/"><img src={logo} alt='logo'
          style={{
            border: '4px solid lightgray'
          }} /></Navbar.Brand>
          <Nav>
            <Nav.Link id="nav-links" href="/">Home</Nav.Link>
            <NavDropdown title="About" id="nav-links">
              <Container className='dropdown-box'>
              <NavDropdown.Item id="nav-item-links" href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item id="nav-item-links" href="/contact">Contact Us</NavDropdown.Item>
              </Container>
            </NavDropdown>
            <Nav.Link id="nav-links" href="/services">Services</Nav.Link>
            
            <Nav.Link id="nav-links" href="/request"><img src={request} alt='logo'
            style={{
            width: '200px',
            height: '80px',
            border: '4px solid lightgray',
            marginLeft: '310%'
            }} /></Nav.Link>
          </Nav>
      </Navbar>

 )   
}

export default Navigation;*/
