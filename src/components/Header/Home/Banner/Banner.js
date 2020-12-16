import React from 'react';
import './Banner.css';
import { Container, Row } from 'react-bootstrap';
import NavBar from '../../../Shared/NavBar/NavBar';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
          <div className="banner">     
              <NavBar></NavBar> 
              <Container>
              <div className="banner-content">  
              <Row>
                  <div className="col-12 col-md-6">
                     <div className="banner-text jumbotron jumbotron-fluid bg-transparent">
                     <h1 className="banner-title mb-4">The Best fitness
                          <br/>
                          studio in town
                      </h1>
                      <p>
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa iure magni similique reprehenderit quisquam!
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nisi numquam error ipsum blanditiis nulla esse sequi at.
                      </p>
                    <Link to="/membership-form">
                    <button className="btn btn-lg banner-btn">
                          Join Us
                      </button>
                    </Link>
                     </div>
                  </div>
                  <div className="col-12 col-md-6">
                 <div>
                 <iframe style={{maxWidth: '100%', width: '550px', height: '450px'}} title='Video' src="https://www.youtube.com/embed/tUykoP30Gb0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                 </div>
                  </div>
              </Row>
             </div>
              </Container>        
          </div>
        </>
    );
};

export default Banner;