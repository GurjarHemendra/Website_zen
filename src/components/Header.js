import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Zenith community</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
