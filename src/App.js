import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart';
import Television from './components/Television';
import Transcript from './components/Transcript';
import Video from './components/Video';
import Webcast from './components/Webcast';
import Request from './components/Request';
import Biographies from './components/Biographies';
import Footer from './components/Footer';
import Lfooter from './components/Lfooter';
import Services from './components/Services';





function App() {
    return(
        <>
        <Header />
        
    
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
        
        
        </>
    );    
        
    }
export default App;
    
