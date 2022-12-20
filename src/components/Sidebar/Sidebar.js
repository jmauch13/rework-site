
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Sidebar.css';
import logo from '../../assets/capsolutions.gif';
import { NavDropdown } from 'react-bootstrap';



function Sidebar() {
  return (
    
    <Navbar className="sidebar d-flex p-3" width="100%" collapseOnSelect expand="lg">
        <Navbar.Brand href="/"><img src={logo}
        width="115" height="45" alt='logo' /></Navbar.Brand>
        <Navbar.Toggle id="toogle" marginRight="5" color="white" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link id="links" textAlign="center" href="/">Home</Nav.Link>
            <Nav.Link id="links" href="/about">About Us</Nav.Link>
            
            <NavDropdown id="links" title="Services">
              <NavDropdown.Item id="item-links" href="/cart">Remote CART</NavDropdown.Item>
              <NavDropdown.Item id="item-links" href="/television">Television Captioning</NavDropdown.Item>
              <NavDropdown.Item id="item-links" href="/transcript">Transcription &#38; Translation</NavDropdown.Item>
              <NavDropdown.Item id="item-links" href="/video">Video Production</NavDropdown.Item>
              <NavDropdown.Item id="item-links" href="/webcast">Webcasts</NavDropdown.Item>
  </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link id="links" href="/contact">Contact Us</Nav.Link>
            <Nav.Link id="links" href="/request">Request a Bid</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default Sidebar;