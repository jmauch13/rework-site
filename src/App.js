import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Navigation Section
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
//import './components/Navigation/menu.css';
import request_logo from './assets/request_1.gif';

// Pages and Components
import Contact from './pages/Contact';
import Request from './pages/Request';
import Aboutpage from './pages/Aboutpage';
import Services from './pages/Services';
import Television from './pages/Television';
import Transcript from './pages/Transcript';
import Video from './pages/Video';
import Webcast from './pages/Webcast';
import Cart from './pages/Cart';
import Bio from './pages/Bio';
import logo from './assets/capsolutions.gif';
import './App.css';
import Container from 'react-bootstrap/Container';
import logo2gif from './assets/C_logo_2.gif';
import background from './assets/steno.jpg';
import Lfooter from './components/Lfooter';

export default function App() {
	return (
	  <>

		<div className="logo" href="/"><img src={logo} alt='logo'
        style={{
          border: '4px solid lightgray'
        }} />
		</div>
		
        <Router>

		<Nav className="nav">
		<Button className="nav-btn" variant='primary' size='md' href="/">Home</Button>
            <DropdownButton title="About" id="nav-links">
              
              <Dropdown.Item id="nav-item-links" href="/aboutpage">About Us</Dropdown.Item>
              <Dropdown.Item id="nav-item-links" href="/contact">Contact Us</Dropdown.Item>
            
            </DropdownButton>
            <DropdownButton title="Services" id="nav-links">
            
            <Dropdown.Item id="nav-item-links" href="/television">Television Captioning</Dropdown.Item>
            <Dropdown.Item id="nav-item-links" href="/cart">CART Services</Dropdown.Item>
            <Dropdown.Item id="nav-item-links" href="/webcast">Webcasts</Dropdown.Item>
            <Dropdown.Item id="nav-item-links" href="/transcript">Transcription &#38; Translation</Dropdown.Item>
            <Dropdown.Item id="nav-item-links" href="/video">Video Production</Dropdown.Item>
            
            </DropdownButton>
			</Nav>
            
            <div id="nav-links" href="/request"><img src={request_logo} alt='logo'
            style={{
            width: '100px',
            height: '80px',
            border: '4px solid lightgray',
            marginLeft: '50%'
            }} />
			</div>
      


		  {/*<ul>
			<li>
			  <Link to="/">Home</Link>
			</li>
			
			<li>
			  <Link to="/aboutpage">About</Link>
			  <ul>
				<li className="hide">
					<Link to="/aboutpage">About Us</Link>
				</li>
				<li className="hide">
					<Link to="/contact">Contact Us</Link>
				</li>
			  </ul>
			</li>
			

			
	</ul>*/}
  
		  <hr />
  
		  {/*
			A <Switch> looks through all its children <Route>
			elements and renders the first one whose path
			matches the current URL. Use a <Switch> any time
			you have multiple routes, but you want only one
			of them to render at a time
		  */}
		  <Switch>
			<Route exact path="/">
			  <Homepage />
			</Route>
			<Route path="/aboutpage">
			  <Aboutpage />
			</Route>
			<Route path="/contact">
			  <Contact />
			</Route>
			<Route path="/request">
				<Request />
			</Route>
			<Route path="/services">
			  <Services />
			</Route>
			<Route path="/television">
			  <Television />
			</Route>
			<Route path="/transcript">
			  <Transcript />
			</Route>
			<Route path="/video">
			  <Video />
			</Route>
			<Route path="/webcast">
			  <Webcast />
			</Route>
			<Route path="/cart">
			  <Cart />
			</Route>
			<Route path="/bio">
			  <Bio />
			</Route>
		  </Switch>
	
	  </Router>
	  
	  </>
	);
  }
  function Homepage() {
	return (
		<Container fluid className='container'>

                <div className='landing-box'>
                    <img src={logo2gif} alt='logo2' id='mission'
                        style={{
                            height: '400px',
                            marginLeft: '5%',
                            marginTop: '12%',
                            border: '4px solid lightgray',
                            boxShadow: '65px 65px 85px 85px gray'
                        }}
                    />

                    <p className='landing-paragraph'>
                        Find out why Caption Solutions is a leader in the industry<br />
                        <Link to="/contact">Contact us</Link> today to inquire about our <Link to="/services">Services</Link><br />
                        <br />
                        &#x2714; Industry leader since 2005<br />
                        &#x2714; Reliable and guarenteed services<br />
                        &#x2714; 24 hour emergency captioning services<br />
                        &#x2714; Quality and competent service providers

                    </p>



                    <div className='machine-img' id='img' style={{
                        backgroundImage:
                            `url(${background})`,
                        height: '500px',
                        width: '900px',
                        border: '2px',
                        boxShadow: '65px 65px 85px 85px lightgray',
                        opacity: '.2',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        zIndex: '1',
                        position: 'relative',
                        marginTop: '-42%',
                        marginLeft: '30%',
                        overflow: 'hidden'


                    }}>

                    </div>
                </div>
                <footer className='landing-footer'>
                    <Lfooter />
                </footer>
            </Container>
        
    )
}
	
  
  