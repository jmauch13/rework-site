import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
//import { Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Bio from './pages/Bio';
import Lfooter from './components/Lfooter';
import Request from './pages/Request';
import Transcript from './pages/Transcript';
import Cart from './pages/Cart';
import Webcast from './pages/Webcast';
import Television from './pages/Television';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Video from './pages/Video';


function App() {

	return (


		<BrowserRouter>

			<Route exact path="/">
				<Homepage />
			</Route>
			<Route path="/about">
				<Aboutpage />
			</Route>
			<Route path="/bio">
				<Bio />
			</Route>
	        <Route path="/lfooter">
				<Lfooter />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
			<Route path="/request">
				<Request />
			</Route>
			<Route path="/cart">
				<Cart />
			</Route>
			<Route path="/television">
				<Television />
			</Route>
			<Route path="/webcast">
				<Webcast />
			</Route>
			<Route path="/transcript">
				<Transcript />
			</Route>
			<Route path="/video">
				<Video />
			</Route>
			<Route path="/services">
				<Services />
			</Route>
		</BrowserRouter>

	)

}

export default App;