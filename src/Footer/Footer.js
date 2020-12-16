import React from 'react';
import './Footer.css';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <Container>
                    <Row>
                        <div className="col-12 col-md-5">
                         <Row>
                             <div className="col-6">
                             <div className="col-content">
                           <Link className="nav-brand brand text-center" to="/" style={{ fontSize: '27px', fontWeight: '500' }}>
                                POWER<span className="orange-text">X</span>
                            </Link>
                           </div>
                             </div>
                             <div className="col-6">
                                    <div className="col-content">
                                        <p><strong>
                                            Need Help?
                       </strong></p>
                                        <p>
                                            Help Center
                    </p>
                                        <p>
                                            Email Support
                    </p>
                                        <p>
                                            Live Chat
                    </p>
                                        <p>
                                            Gift Certificates
                    </p>
                                        <p>
                                            Send Us Feedback
                    </p>
                                    </div>
                                </div>
                         </Row>
                        </div>
                        <div className="col-12 col-md-7">
                            <Row>
                                <div className="col-6 col-md-4">
                                    <div className="col-content">

                                        <p><strong>
                                            Digital Resources
                                            </strong> </p>
                                        <p>
                                            Articles
                                            </p>
                                        <p>
                                            E-books
                                            </p>

                                    </div>
                                </div>
                                <div className="col-6 col-md-4">
                                    <div className="col-content">
                                        <p><strong>Connect with us</strong></p>
                                        <p>
                                  <i className="fa fa-youtube-play mr-1" style={{ fontSize: '25px'}} aria-hidden="true"></i>
                                        <i className="fa fa-facebook mr-1" style={{ fontSize: '25px'}} aria-hidden="true"></i>
                                        <i className="fa fa-instagram mr-1" style={{ fontSize: '25px'}} aria-hidden="true"></i>
                                       <i className="fa fa-twitter mr-1" style={{ fontSize: '25px'}} aria-hidden="true"></i>
                                        <i className="fa fa-whatsapp mr-1" style={{ fontSize: '25px'}} aria-hidden="true"></i>
                                        </p>
                                        <p> Forum</p>

                                    </div>
                                </div>
                                <div className="col-6 col-md-4">
                                    <div className="col-content">
                                        <p><strong> Join our Newsletter</strong> </p>
                                        <p>Get exclusive news, features, and updates from the Shreder Weight Loss Academy.</p>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Row>
                    <div className="copyright-text">
                        <p className="text-center"><small>
                            All rights reserved. 2020
                   </small></p>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Footer;