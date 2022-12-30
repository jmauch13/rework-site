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
			<Route exact path="/"
			  component={Homepage} />
			<Route path="/aboutpage"
				component={Aboutpage} />
			<Route path="/contact"
				component={Contact} />
			<Route path="/request"
				component={Request} />
			<Route path="/services"
				component={Services} />
			<Route path="/television"
				component={Television} />
			<Route path="/transcript"
				component={Transcript} />
			<Route path="/video"
				component={Video} />
			<Route path="/webcast"
				component={Webcast} />
			<Route path="/cart"
				component={Cart} />
			<Route path="/bio"
				component={Bio} />
		  </Switch>
	
	  </Router>
	  
	  
	);
  }
 
	
  
  