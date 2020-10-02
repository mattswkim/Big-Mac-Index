import React from 'react';
import Nav from 'react-bootstrap/Navbar';

const Navbar = () => {
  return (
      <Nav bg="dark" variant="dark" sticky="top">
        <Nav.Brand href="/">
          Big Mac Index Calcaulator
        </Nav.Brand>
      </Nav>
  )
}

export default Navbar;