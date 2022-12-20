import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import keys from '../assets/stenokeys.gif';


function Lfooter() {


    return (
        <>
        <div className='l-banner'>
           <div style={{
                width: '100%',
                height: '25px',
                backgroundColor: '#0060B0',
                marginTop: '58px'
            }}/>
        </div>
        <div className='l-slogan'>
            <p>
            Caption Solutions is the perfect <em>solution</em> 
            for all your captioning, <br />subtitling and transcription needs!
            </p>
        </div>
        <div className='l-banner'>
           <div style={{
                width: '100%',
                height: '25px',
                backgroundColor: '#0060B0',
                marginTop: '20px'
            }}/>
        </div>
            
        <Container>
        <Row>
        <Col className='footer-icons'>
            <a
                href='mailto:kala@captionsolutions.com'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <img
                        src={require('../assets/email-icon.png')}
                        alt='email'
                        className='email-logo'
                        ></img>
                </a>
        </Col>

        <Col className='footer-icons'>
            <a
                href='https://www.linkedin.com/in/kala-patterson-44601914'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <img
                        src={require('../assets/linkedin-icon.png')}
                        alt='linkedin'
                        className='linkedin-icon'
                        ></img>
                </a>
        </Col>

        <Col className='footer-icons'>
            <a
                href='https://facebook.com/CaptionSolutions/'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <img
                        src={require('../assets/fb-icon.png')}
                        alt='facebook'
                        className='fb-icon'
                        ></img>
                </a>
        </Col>
        </Row>
        <div className='made-by1'>
        <img src={keys} alt='stenokeys'
            style={{
                height: '50px',
                width: '90px'
            }}/>
        <p>Created with &#10084;&#xfe0f; 2022</p>
        </div>
        
        </Container>
        </>
    )
}

export default Lfooter;