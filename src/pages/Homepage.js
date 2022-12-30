import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo2gif from '../assets/C_logo_2.gif';
import background from '../assets/steno.jpg';
//import slogan from '../../assets/slogan.gif';
import Lfooter from '../components/Lfooter';






function Homepage() {

    return (

            <Container fluid className='container'>

                <div className='landing-box'>
                    <img src={logo2gif} alt='logo2' id='mission'
                        style={{
                            height: '400px',
                            marginLeft: '5%',
                            marginTop: '12%',
                            border: '4px solid lightgray',
                            boxShadow: '65px 65px 85px 85px gray'
                        }}
                    />

                    <p className='landing-paragraph'>
                        Find out why Caption Solutions is a leader in the industry<br />
                        <Link to="/contact">Contact us</Link> today to inquire about our <Link to="/services">Services</Link><br />
                        <br />
                        &#x2714; Industry leader since 2005<br />
                        &#x2714; Reliable and guarenteed services<br />
                        &#x2714; 24 hour emergency captioning services<br />
                        &#x2714; Quality and competent service providers

                    </p>



                    <div className='machine-img' id='img' style={{
                        backgroundImage:
                            `url(${background})`,
                        height: '500px',
                        width: '900px',
                        border: '2px',
                        boxShadow: '65px 65px 85px 85px lightgray',
                        opacity: '.2',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        zIndex: '1',
                        position: 'relative',
                        marginTop: '-42%',
                        marginLeft: '30%',
                        overflow: 'hidden'


                    }}>

                    </div>
                </div>
                <footer className='landing-footer'>
                    <Lfooter />
                </footer>
            </Container>
        
    )
}



export default Homepage;