import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from '../Footer';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <Container className='contact'>
            <p>
                Get in Touch with us!
            </p>
            <br />
            <div className='address'>
                1532 Eldorado Drive <br />
                Lawrence, Kansas 66047 <br />
                (785)843-5800
            </div>
            <div className='email'>
                <br />
                <br />
                <Button variant='primary' size='lg'
                    href='mailto:kala@captionsolutions.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >Email Us</Button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </Container>

    )
}

export default Contact;