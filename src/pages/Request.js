import React from 'react';
import Lfooter from '../components/Lfooter';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Request() {
    return (
        
            <Container className='request-page'>
                <p>Downloadable Bid Request Form</p>
                <br />
                <div className='realtime'>
                    <Button variant='primary' size='lg' href={require("../assets/bidrequest_realtime.pdf")}>
                        Realtime Request</Button>
                </div>
                <br />
                <br />
                <div className='offline'>
                    <Button variant='primary' size='lg' href={require("../assets/bidrequest_offline.pdf")}>
                        Offline Request</Button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <Lfooter />
            </Container>
    
    )
}

export default Request;