import React from 'react';
import '../../App.css';
//import { Link } from 'react-router-dom';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Button from 'react-bootstrap/Button';
//import Col from 'react-bootstrap/Col';
//import Lfooter from '../Lfooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo2gif from '../../assets/C_logo_2.gif';
import background from '../../assets/steno.jpg';
//import slogan from '../../assets/slogan.gif';
import Lfooter from '../Lfooter';




function Landing(props) {
    const { currentTab, setCurrentTab } = props;
    return (


    <section className='container'>
        
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
    Find out how Caption Solutions is a leader in the industry.<br />
    Contact us today to inquire about...<br /></p>
    <li className={currentTab === "television"}> 
	<span onClick={() => setCurrentTab("television")}>Television Captioning</span></li><br />
    &#x2714; CART Services<br />
    &#x2714; Webcasts<br />
    &#x2714; Video Production<br />
    &#x2714; Transcription &#38; Translation
        
    

    
    
    <div id='img' style={{
        backgroundImage:
        `url(${background})`,
        height: '700px',
        width: '900px',
        border: '2px',
        boxShadow: '65px 65px 85px 85px lightgray',
        opacity: '.2',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: '99',
        position: 'relative',
        marginTop: '-49.2%',
        marginLeft: '36%',
        overflow: 'hidden'
        
        
    }}>
        
    </div>
    </div>

        <Lfooter />
        </section>
       
    )
}



export default Landing;

