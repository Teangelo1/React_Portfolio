import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import './Header.css'
import {Link} from "react-router-dom";
 function Header() {
    return (
        <div>
             <Navbar id="navbar" collapseOnSelect expand="lg" bg="transparent" variant="" className="navitemcolor navbar-dark">
        <Navbar.Brand as={Link} id="aboutmename" href="/">Teangelo Burks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav navbar-dark " />
        <Navbar.Collapse id="responsive-navbar-nav navbar-dark">
          <Nav className=" move-right">
            <Nav.Item>
              <Nav.Link as={Link} className="move-right navbar-dark" to="/portfolio">Projects</Nav.Link>
              </Nav.Item>
          </Nav>
        </Navbar.Collapse >
      </Navbar> 
        </div>
    )
}
export default Header;