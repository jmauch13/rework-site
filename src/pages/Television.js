import React from 'react';
import Lfooter from '../components/Lfooter';
import Container from 'react-bootstrap/Container';



function Television() {

    return (

            <Container fluid>

                <div className='page-header'>
                    <h1>
                        Television Broadcast Captioning
                    </h1>
                </div>
                <div className='page-content'>
                    Caption Solutions’ dedicated team of skilled and experienced broadcast captioners provides captioning services of superior quality at competitive rates for all types of television broadcasts – including news, sports, public information, entertainment and religious programming.
                    <br />
                    <br />

                    We are available to our contracted clients 24/7/365 to provide emergency broadcast captioning services for weather emergencies and late-breaking stories. Our emergency captioning services are prompt and accurate, and our response time is guaranteed! There is no additional charge for on-call availability, and you pay your regular hourly rate if services are activated – no premiums!

                    <br />
                    <br />
                    For live television broadcasts, realtime captions are added remotely to the live television signal as it is broadcast or transmitted.

                    <br />
                    <br />
                    Prerecorded television programs may be captioned using the realtime captioning technique either as they air or as they are taped for future broadcast. They may also be captioned in advance using offline captioning production
                    methods.

                    <br />
                    <br />
                    Caption Solutions’ experienced staff will work with you to determine the best method for captioning your television programs.

                </div>
                <Lfooter />
            </Container>
        
    )
}

export default Television;