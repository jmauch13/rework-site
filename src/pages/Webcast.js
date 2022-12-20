import React from 'react';
import Container from 'react-bootstrap/Container';
import Lfooter from '../components/Lfooter';
import Header from '../components/Header';

function Webcast() {
    return (
        <>
            <Header />
            <Container fluid>
                <div className='page-header'>
                    <h1>Webcast Services</h1>
                </div>
                <div className='page-content'>
                    Let Caption Solutions help to make your webcasts, educational presentations, and live meetings or conferences completely accessible for your audience through realtime captioning on the internet – and receive a complete transcript of your live events in the process!
                    <br />
                    <br />
                    Our webcast captioning services integrate realtime text with streaming media presentations, ensuring that all participants in your webcast have full access to its content. Our remote CART (Computer Assisted Real-Time) services allow students and live meeting participants to view captions on a laptop computer
                    via the internet.

                </div>
                <br />
                <br />
                <br />
                <Lfooter />
            </Container>
        </>
    )
}

export default Webcast;