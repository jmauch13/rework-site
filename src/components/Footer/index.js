import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import keys from '../../assets/stenokeys.gif';



function Footer() {
    return (
        <>
        <div className='banner'>
           <div style={{
                width: '100%',
                height: '25px',
                backgroundColor: '#0060B0'
            }}/>
        </div>
        <Container className='footer-box'>
            <Row>

        <Col className='ft-icons'>
            <a
                href='mailto:kala@captionsolutions.com'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <img
                        src={require('../../assets/email-icon.png')}
                        alt='email'
                        className='email-logo'
                        ></img>
                </a>
        </Col>

        <Col className='ft-icons'>
            <a
                href='https://www.linkedin.com/in/kala-patterson-44601914'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <img
                        src={require('../../assets/linkedin-icon.png')}
                        alt='linkedin'
                        className='linkedin-icon'
                        ></img>
                </a>
        </Col>

        <Col className='ft-icons'>
            <a
                href='https://facebook.com/CaptionSolutions/'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <img
                        src={require('../../assets/fb-icon.png')}
                        alt='facebook'
                        className='fb-icon'
                        ></img>
                </a>
        </Col>
        </Row>
        
        <div className='footer-logo'>
            <p>
            Caption Solutions is the perfect <em>solution</em> for all your captioning, <br />subtitling and transcription needs!
            </p>
        </div>
        

        <div className='made-by'>
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

export default Footer;