import React from 'react';
import Footer from '../Footer';
import Container from 'react-bootstrap/Container';

function Cart() {
    return (
        <Container fluid>
            <div className='page-header'>
                <h1>Remote CART Services</h1>
            </div>

            <div className='page-content'>
                It is very difficult for persons with hearing loss and/or those who have difficulty hearing in noisy listening environments to participate in group activities and events.  For live presentations such as meetings, seminars, conventions and classrooms, realtime captioning displays the spoken words on a laptop computer or other projection screen, thereby making the information presented accessible to all participants. <br /> <br />

                Sometimes, however, it is not practical for the real-time captioning to be provided on-site and/or it may be necessary to provide realtime captioning services of a live presentation to users who are not all in attendance at the presentation. Our remote CART (Computer Assisted Real-Time) services allow students and live meeting participants to view captions on a laptop computer or projection screen via the internet—from a single location or from multiple locations at the same time. <br /> <br />

                For remote CART services, the CART provider and the users connect to an IP address using a broadband internet connection.  All that is required of the client is a telephone line to send the audio portion of the event and a computer with internet access to receive the simultaneous text.  An added benefit of remote CART services is that a transcript is created as the services are provided, and it may be archived for future use. <br /> <br />

                Let Caption Solutions’ experienced CART providers make your live presentations accessible for all participants—wherever they are!


            </div>

            <Footer />

        </Container>

    )
}

export default Cart;