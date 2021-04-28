import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import './Header.css'


 function Header() {
    
    return (
        <div>
             <Navbar id="navbar" collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand id="aboutmename" href="/">Teangelo Burks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto text-center move-left">
            <Nav.Link className="text-center" href="/">About Me</Nav.Link>
            <Nav.Link  href="/portfolio">Portfolio</Nav.Link>
            {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
        </div>
    )
}

export default Header;