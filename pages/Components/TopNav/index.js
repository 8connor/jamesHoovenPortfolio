import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function TopNav() {
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#pricing">Projects</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://www.linkedin.com/in/james-hooven/">linkedIn</Nav.Link>
          <Nav.Link eventKey={2} href="https://github.com/8connor">
            Github
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;
