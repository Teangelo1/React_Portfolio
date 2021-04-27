import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import './Header.css'


 function Header() {
    
    return (
        <div>
             <Navbar id="navbar" collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand id="aboutmename" href="#home">Teangelo Burks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto text-center">
            <Nav.Link className="text-center" href="/">About Me</Nav.Link>
            <Nav.Link  href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
        </div>
    )
}

export default Header;