import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from '../Footer';
import Button from 'react-bootstrap/Button';



function About() {

    return (
        <Container fluid>
            <div className='mb-2'>
                <Button variant='primary' size='lg' href="/biographies">Our Team</Button>
            </div>

            <div className='about-header'>
                <h1>About Us</h1>
            </div>
            <div className='about-content'>
                <p>
                    Since 2005, Caption Solutions has been a trusted provider of realtime captioning services for all types of television broadcasts, streaming media, video productions, and live events. In addition, Caption Solutions offers a complete range of offline captioning, subtitling and transcription services tailored to meet the specific needs of our clients. Caption Solutions has earned a strong reputation as a leader in the captioning industry for providing captioning services of exceptional quality and reliable, personalized services with unmatched attention to detail.
                    <br />
                    <br />
                    At Caption Solutions, our clients include television stations, digital content producers, sports production companies, colleges and universities, corporations, churches, video producers and governmental agencies of all sizes and demographics throughout the country. Our services are reliable and GUARANTEED:
                    <br />
                    <br />
                    Realtime captioning services: On-Air, On-Time and Accurate 99% of the time
                    <br />
                    Offline captioning/transcription services: 100% Accurate, On-time delivery and Cost Efficient workflow for all formats
                    <br />
                    Emergency captioning services: Available 24/7 with Average Response Time 3-5 minutes
                    <br />
                    FCC Caption Quality Best Practices: Full Compliance for Accuracy, Synchronicity, Completeness, and Placement
                    <br />
                    For more information about Caption Solutions, contact us or request a quote today.
                    <br />
                    Caption Solutions is dedicated to providing high-quality, reliable captioning services that meet the needs and exceed the expectations of its clients!
                </p>

            </div>
            <Footer />
        </Container>

    )
}

export default About;