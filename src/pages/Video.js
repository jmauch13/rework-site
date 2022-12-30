import React from 'react';
import Container from 'react-bootstrap/Container';
import Lfooter from '../components/Lfooter';


function Video() {
    return (
        
            <Container fluid>

                <div className='page-header'>
                    <h1>Video Productions</h1>
                </div>
                <div className='page-content'>
                    For prerecorded television programs and video productions, offline captioning ensures that the captions are 100% accurate and complete, and that the text appears in synch with the audio. The offline captioning process embeds the captions in the program so that the captions are always present when it is played or duplicated, even if they are not opened up for viewing.
                    <br />
                    <br />
                    Offline captions contain the verbatim textual display of the audio portion of a program. They either pop on the screen and move around to avoid
                    graphics, or they roll up at the top or bottom of the screen. “Open captions” are permanently displayed every time the program is viewed, while “closed captions” must be opened up by a closed caption decoder in order to be seen by the viewer.
                    <br />
                    <br />
                    Caption Solutions provides a complete range of high-quality offline captioning and subtitling services for all kinds of video productions in several languages.
                    We work with all major tape formats – analog, SD and HD. In addition, we provide captioning and subtitling files compatible with DVD authoring systems and electronic media files – perfect for putting your videos on the web.
                    Caption Solutions will customize its offline captioning services to meet your company’s needs.

                </div>
                <Lfooter />
            </Container>
    
    )
}

export default Video;