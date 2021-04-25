import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


 function Header() {
    
    return (
        <div>
             <Navbar id="navbar" collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand id="aboutmename" href="#home">Teangelo Burks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#AboutMe">About Me</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
        </div>
    )
}

export default Header;