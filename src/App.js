import React, { useState } from 'react';
//import React from 'react';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart';
//import Television from './components/Television';
//import Transcript from './components/Transcript';
//import Video from './components/Video';
//import Webcast from './components/Webcast';
import Request from './components/Request';
//import Biographies from './components/Biographies';
import Footer from './components/Footer';
//import Lfooter from './components/Lfooter';
//import Services from './components/Services';
//import Navigation from './components/Menu/Navigation';
//import Sidebar from './components/NavBar/Sidebar';

function App() {
	const [currentTab, setCurrentTab] = useState("landing");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "landing":
				return <Landing />;
			case "about":
				return <About />;
			case "contact":
				return <Contact />;
			case "cart":
				return <Cart />;
            case "request":
                return <Request />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;



/*const App = () => { 
    return (
            <>
        <Header />
                <BrowserRouter>
                    
                    <Routes>
                    <Route exact path='/' element={<Landing />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/television' element={<Television />} />
                    <Route path='/transcript' element={<Transcript />} />
                    <Route path='/video' element={<Video />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/webcast' element={<Webcast />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/request' element={<Request />} />
                    <Route path='/biographies' element={<Biographies />} />
                    <Route path='/footer' element={<Footer />} />
                    <Route path='/lfooter' element={<Lfooter />} />
                    <Route path='/services' element={<Services />} />
                    </Routes>
                    

                </BrowserRouter>
        
        </>
        
    );    
    }
    
export default App;*/
    
