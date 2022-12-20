import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import cc from '../assets/cc_on_tv.jpeg';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import cart from '../assets/cart.jpeg';
import zoom from '../assets/zoom.jpg';
import subtitles from '../assets/subtitles.jpg';
import translate from '../assets/translate.jpg';
import Lfooter from '../components/Lfooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';



function Services() {
    return (
        <>
            <Header />
            <Container className='services' fluid width='100%'>
                <h1>Services</h1>
                <br />
                <br />
                <br />
                <Row>
                    <Col>
                        <img src={cc} alt="CC"
                            style={{
                                width: '500px',
                                height: '300px',
                                marginTop: '40px',
                                marginLeft: '40px',
                                border: '5px solid gray'
                            }} />
                    </Col>
                    <br />
                    <Col className='cc-text'>
                        <p>
                            <h1>Television Captioning</h1>
                            Modern day, flawless closed captioning is the pillar Caption Solutions was built on.
                            Find out what our reliable professionals can do for you today!
                        </p>
                    </Col>
                    <br />
                </Row>

                <Row>
                    <Col className='cc-btn'>
                        <Button href="/television">Learn More</Button>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col className='cart-text'>
                        <p>
                            <h1>CART Services</h1>
                            Remote CART services to provide high-quality accessability from a single location
                            or from multiple locations at the same time.

                        </p>
                    </Col>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Col>
                        <img src={cart} alt='CART'
                            style={{
                                width: '500px',
                                height: '300px',
                                marginTop: '40px',
                                marginLeft: '70px',
                                border: '5px solid gray'
                            }} />
                    </Col>
                    <br />

                </Row>

                <Row>
                    <Col className='cc-btn'>
                        <Button href="/cart">Learn More</Button>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col>
                        <img src={zoom} alt="CC"
                            style={{
                                width: '500px',
                                height: '300px',
                                marginTop: '40px',
                                marginLeft: '40px',
                                border: '5px solid gray'
                            }} />
                    </Col>
                    <br />
                    <Col className='cc-text'>
                        <p>
                            <h1>Webcasts</h1>
                            Provide accessability for your virtual meetings.  Whether it's for one consumer or many,
                            Caption Solutions provides live, human closed captions for today's virtual landscapes.
                        </p>
                    </Col>
                    <br />
                </Row>

                <Row>
                    <Col className='cc-btn'>
                        <Button href="/webcast">Learn More</Button>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col className='subtitle-text'>
                        <p>
                            <h1>Video Production</h1>
                            Caption Solutions provides a complete range of high-quality offline
                            captioning and subtitling services for all kinds of video productions in several languages.
                        </p>
                    </Col>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Col>
                        <img src={subtitles} alt='CART'
                            style={{
                                width: '500px',
                                height: '300px',
                                marginTop: '40px',
                                marginLeft: '70px',
                                border: '5px solid gray'
                            }} />
                    </Col>
                    <br />

                </Row>

                <Row>
                    <Col className='cc-btn'>
                        <Button href="/video">Learn More</Button>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col>
                        <img src={translate} alt="CC"
                            style={{
                                width: '500px',
                                height: '300px',
                                marginTop: '40px',
                                marginLeft: '40px',
                                border: '5px solid gray'
                            }} />
                    </Col>
                    <br />
                    <Col className='cc-text'>
                        <p>
                            <h1>Transcription &#38; Translation</h1>

                            Accurate, easy-to-read transcripts and foreign language translations for
                            any spoken presentation that needs to be documented in written form.
                        </p>
                    </Col>
                    <br />
                </Row>

                <Row>
                    <Col className='cc-btn'>
                        <Button href="/transcript">Learn More</Button>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />


                <Lfooter />
                <div className='credit'>
                    <a href="https://www.canstockphoto.com">(c) Can Stock Photo / maxxyustas</a>
                </div>
            </Container>
        </>


    )

}

export default Services