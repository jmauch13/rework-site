import React from 'react';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
//import Col from 'react-bootstrap/Col';
//import Lfooter from '../Lfooter';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo2gif from '../../assets/C_logo_2.gif';
import stenomachine from '../../assets/steno2.jpg';
//import slogan from '../../assets/slogan.gif';
import Lfooter from '../Lfooter';

function Landing() {
    return (
        
    <section className='landing-row'>
        
            <div className='logo'>
                <p>
                    Caption Solutions provides high-quality captioning, subtitling
                    and transcription services tailored to meet the specific needs of its clients.
                </p>
            </div>
            
            <div className='steno'>
                <img src={stenomachine} alt='steno' />
            </div>
            <div className='quick-links'>
                <ul className='list-links' ><p>Quick Links</p>
                <li>
                    <Button className='list-btn' href='/television'>Television Captioning</Button>
                </li>
                
                <li>
                    <Button className='list-btn' href='/cart'>CART</Button>
                </li>
                
                <li>
                    <Button className='list-btn' href='/transcript'>Transcription/Translation</Button>
                </li>
                
                <li>
                    <Button className='list-btn' href='/webcast'>Webcasts</Button>
                </li>
                
                <li>
                    <Button className='list-btn' href='/video'>Video Production</Button>
                </li>
                <li>
                    <Button className='list-btn' href='mailto:kala@captionsolutions.com'>Contact Us</Button>
                </li>
                </ul>
                </div>

                {/*<div className='slogan-gif'>
                    <img src={slogan} alt='slogan' 
                    style={{
                    border: '4px solid gray',
                    boxShadow: '25px 25px 50px 25px gray'
                    }}
                    />
                </div>*/}

        <Lfooter />
        </section>

       
       
    

)

}

export default Landing;

