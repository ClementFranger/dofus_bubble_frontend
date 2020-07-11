import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Brand.css";

export default function Brand() {

  return (
    <>
      <Nav className="mr-lg-4">
        <Navbar.Brand>
          <LinkContainer to="/">
            <Nav.Link><Image fluid className="img-navbar" src="bubble.png"/></Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
      </Nav>
    </>
  );
}
