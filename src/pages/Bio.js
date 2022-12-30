import React from 'react';
import Kala from '../assets/kala.jpg';
import Cindy from '../assets/Cindy.jpg';
import Wanda from '../assets/Wanda.jpg';
import Jane from '../assets/Jane.jpg';
import Container from 'react-bootstrap/Container';
import Lfooter from '../components/Lfooter';



function Bio() {
    return (
        
            <Container fluid className='biography'>
                <h1>Our Team</h1>
                <div className='kala'>
                    <img src={Kala} style={{ width: '150px', height: '200px', borderRadius: '30px' }} alt='kala' />

                    <div className='name-header'>
                        Kala Patterson, President
                    </div>
                    <p>

                        For more than 25 years, Kala Patterson has dedicated her career in the captioning industry to providing and promoting high-quality
                        captioning services for persons with hearing loss. She began her career in 1992 as a caption service provider in a public school
                        system for students with hearing loss. From 1995-2005, Kala was a founder and managing partner with Caption Services of Kansas, LLC.
                        In 2005, Kala founded Caption Solutions, LLC and she oversees all aspects of the company&#39;s operations-- including business development,
                        client relations, technical support, human resources and financial management.
                        <br />
                        <br />
                        A native of Great Bend, Kansas, Kala earned a B.S. in Business Administration from The University of Kansas. She and her husband have
                        three adult daughters. In her spare time, Kala enjoys spending time with her family and friends, traveling, and following her favorite
                        sports teams.
                    </p>
                </div>
                <div className='cindy'>
                    <img src={Cindy} style={{ width: '150px', height: '200px', borderRadius: '30px' }} alt='cindy' />
                    <div className='name-header'>
                        Cindy Roberts, Scheduling Coordinator
                    </div>
                    <p>
                        Cindy Roberts joined Caption Solutions in August 2014. Her duties include maintaining accurate invoicing records and working closely
                        with our broadcast captioners to match their availability with our ever-changing scheduling needs. Cindy earned a B.G.S. in Communications
                        and Technology from The University of Kansas. Cindy lives with her husband and two daughters, and she enjoys Tae Kwon Do, volleyball and
                        crocheting.
                    </p>
                </div>
                <div className='wanda'>
                    <img src={Wanda} style={{ width: '150px', height: '200px', borderRadius: '30px' }} alt='wanda' />
                    <div className='name-header'>
                        Wanda Breeden, Offline Captioning Specialist
                    </div>
                    <p>
                        Wanda Breeden joined Caption Solutions in January 2007. She manages our offline captioning department by determining the best workflow
                        to meet our post-production clients' captioning needs and then by producing high-quality captioning services for pre-produced programs.
                        A Lawrence native, Wanda is a graduate of Kansas University's Sign Language Interpreter Training Program. She and her husband have
                        two adult daughters and a granddaughter. Wanda enjoys quilting, antiquing and spending time with her family.
                    </p>
                </div>
                <div className='jane'>
                    <img src={Jane} style={{ width: '150px', height: '200px', borderRadius: '30px' }} alt='jane' />
                    <div className='name-header'>
                        Jane Vangemeren, Offline Captioning Assistant
                    </div>
                    <p>
                        Jane Vangemeren is a retired middle school language arts teacher and has been with Caption Solutions since August 2015. She assists
                        with all aspects of our offline captioning services, including transcription and file preparation. Jane grew up in Ulysses, Kansas and
                        received her B.A. in Secondary English Education from Baker University. Jane has four adult children and 11 grandchildren.
                        She enjoys reading, quilting, knitting and time with family and friends.
                    </p>
                </div>

                <Lfooter />
            </Container>
        
    )
}

export default Bio;