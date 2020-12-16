import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
  return (
    <Navbar expand="lg" style={{position: 'relative', zIndex: '2'}}>
    <Container>
    <Link className="nav-brand brand" to="/" style={{fontSize: '37px'}}>
         POWER<span className="orange-text">X</span>
     </Link>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="ml-auto">
         <Link className="nav-link" to="/">Home</Link>
         <Link className="nav-link" to="/service">Service</Link>
         <Link className="nav-link" to="/class">Our Classes</Link>
         <Link className="nav-link" to="/">About Us</Link>
         <Link className="nav-link" to="/blog">Blog</Link>
         <Link className="nav-link" to="/pricing">Pricing</Link>
         <Link className="nav-link" to="/">Contact Us</Link>
       </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  );
};

export default NavBar;