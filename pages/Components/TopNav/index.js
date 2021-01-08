import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function TopNav() {
  const [scrollState, setScrollState] = useState("bg-transparent");
  let listener = null;

  const config = {
    marginBottom: "-56px",
  };

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "bg-dark") {
          setScrollState("bg-dark");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("bg-transparent");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      variant="dark"
      style={config}
      className={`${scrollState}`}
    >
      <Navbar.Brand href="#home">James Hooven's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            123
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;
