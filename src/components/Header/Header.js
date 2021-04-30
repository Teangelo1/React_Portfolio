import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import './Header.css'


 function Header() {
    
    return (
        <div>
             <Navbar id="navbar" collapseOnSelect expand="lg" bg="transparent" variant="" className="navitemcolor">
        <Navbar.Brand id="aboutmename" href="/">Teangelo Burks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav color-white " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" move-right">
            <Nav.Link className="move-right" href="/portfolio">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse >
      </Navbar> 
        </div>
    )
}

export default Header;