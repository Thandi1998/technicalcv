import React from 'react';
import './index.css';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'; 
import {Container, Navbar} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      home:{
        title:'Thandi Inoccentia,',
        subtitle:'Welcome',
      },
      contact:{
        title:'Contact me'
      },
      about:{
        title:'About Me'
      }
    }
  }

  render(){
    return (
      <Router>
        <Navbar className="border"  expand="lg" color="white">
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
        <Navbar.Collapse id="navbar-toogle">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>

        </Nav>
      </Navbar.Collapse>
      </Navbar>
      
      <HomePage />
      <AboutPage/>
      <ContactPage />
     
      <footer className="footer">
        <Container fluid={true}>
              <Row className="border-top justify-content-between p-3">
                  <Col className="p-0" md={3} sm={12}>
                      Email : <a href="thandiinnocentia355@gmail.com">thandiinnocentia355@gmail.com</a>
                  </Col>
                  <Col className="p-0" md={3} >
                      Address : <p>Graduate, 3169 Sekete, Witsieshoek</p>
                  </Col>
                  <Col className="cv" >
                      Download pdf cv here : <a href="/Buthelezi _CV" download>Download</a>
                  </Col>
                  <Col>
                      <Row>
                      <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                      </Row>
                  </Col>
              </Row>
          </Container>
      </footer>
    </Router>  
    );
  }
  
}

export default App;
