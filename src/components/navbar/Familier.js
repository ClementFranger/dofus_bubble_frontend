import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Familier() {
  return (
    <>
      <Nav>
        <LinkContainer to="/familiers">
          <Nav.Link>Familiers</Nav.Link>
        </LinkContainer>
      </Nav>
    </>
  );
}
