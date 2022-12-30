import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Navigation Section
import Navigation from "./components/Navigation/Navigation";
import './components/Navigation/menu.css';


// Pages and Components
import Homepage from "./pages/Homepage";
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
import './App.css';


export default function App() {
	return (
	
	  <Router>
		<Navigation />
		  <Switch>
			<Route exact path="/homepage">
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
	  
	  
	);
  }
 
	
  
  