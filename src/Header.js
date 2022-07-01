import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const Header = [
  {
    title: 'Compétences',
    url: '/tabs',
    id: '1',
  },
  {
    title: 'Portfolio',
    url: '#portfolio',
    id: '2',
  },
  {
    title: 'Contact',
    url: '#contact',
    id: '3',
  },
];

function GetHeader() {
  return (
    <header id="navbar" className="fixed-top">
      <Navbar sticky="top" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={'./assets/img/Logo.svg'} alt="Logo Prisca" height={100} />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="item-container">
            <Nav className="item-list roboto-slab fw-bold">
              {Header.map((item) => {
                return (
                  <Link key={item.id} to={item.url} className="text-gray">
                    {item.title}
                  </Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default GetHeader;
