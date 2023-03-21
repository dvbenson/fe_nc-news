import React, { useState, useEffect } from 'react';
import { getTopics } from '../utils';
import { Link } from 'react-router-dom';
import Login from './Authentication/Login';
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as Brand } from '../images/logo.svg';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Authentication/Login.css';

function NavBar({ topics, setTopics }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    getTopics()
      .then((topicsFromApi) => {
        setTopics(topicsFromApi);
      })
      .catch((err) => {
        setError(err);
      });
  }, [setTopics]);

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (error) {
    return (
      <Navbar variant='light' bg='danger' expand='lg'>
        <Container>
          <Navbar.Brand>
            <Brand />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to={`/`}>
                Home
              </Nav.Link>
              <NavDropdown title='News' id='basic-nav-dropdown'>
                <NavDropdown.Item key={uuidv4()}>
                  Error, reload browser
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={`/users`}>
                Users
              </Nav.Link>
            </Nav>
            <Login />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  return (
    <Navbar variant='light' bg='danger' expand='lg'>
      <Container>
        <Navbar.Brand>
          <Brand />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to={`/`}>
              Home
            </Nav.Link>
            <NavDropdown title='News' id='basic-nav-dropdown'>
              <NavDropdown.Item key={uuidv4()} as={Link} to={`/articles`}>
                All News
              </NavDropdown.Item>
              {topics.map((topic) => {
                return (
                  <NavDropdown.Item
                    key={uuidv4()}
                    as={Link}
                    to={`/topics/${topic.slug}`}
                  >
                    {capFirstLetter(topic.slug)}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link as={Link} to={`/users`}>
              Users
            </Nav.Link>
          </Nav>

          <Login />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
