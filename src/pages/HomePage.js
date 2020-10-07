import React from 'react';
import '../index.css';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';


function HomePage(props){
    
    return(
        <div className="mainPage">
            <video src='/videos/homepagevideo.mp4' className="mainbody" autoPlay loop muted />
            <Container  fluid={true}>
                <Row className="justify-content-around">
                   <h1>THANDI INNOCENTIA BUTHELEZI</h1> 
                </Row>
                <Row className="justify-content-around">
                   <p>A diligent final year university student currently pursuing her Bachelor
                    of Science in Information technology</p> 
                </Row>

                <Row className="justify-content-around-buttons"> 
                  <Link href='https://github.com/Thandi1998?tab=repositories'>
                  <Button>
                      My Projects
                  </Button>
                  </Link>

                  <Link href='https://github.com/Thandi1998'>
                  <Button>
                      Github
                  </Button>
                  </Link>
                </Row>
            </Container>
        </div>
    );

}

export default HomePage;