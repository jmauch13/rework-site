
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
            <Nav.Link id="nav-links" href="/">Home</Nav.Link>
            <NavDropdown title="About" id="nav-links">
              <Container className='dropdown-box'>
              <NavDropdown.Item id="nav-item-links" href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item id="nav-item-links" href="/contact">Contact Us</NavDropdown.Item>
              </Container>
            </NavDropdown>
            <Nav.Link id="nav-links" href="/services">Services</Nav.Link>
            {/*<NavDropdown title="Services" id="nav-links">
              <NavDropdown.Item id="nav-item-links" href="/cart">Remote CART</NavDropdown.Item>
              <NavDropdown.Item id="nav-item-links" href="/television">Television Captioning</NavDropdown.Item>
              <NavDropdown.Item id="nav-item-links" href="/transcript">Transcription &#38; Translation</NavDropdown.Item>
              <NavDropdown.Item id="nav-item-links" href="/video">Video Production</NavDropdown.Item>
              <NavDropdown.Item id="nav-item-links" href="/webcast">Webcasts</NavDropdown.Item>
        </NavDropdown>*/}
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

export default Navigation;
