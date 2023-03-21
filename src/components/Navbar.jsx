import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { getTopics } from '../utils';
import { Link } from 'react-router-dom';
import Login from './Authentication/Login';
import User from './Authentication/User';
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as Brand } from '../images/logo.svg';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';

function NavBar({ topics, setTopics }) {
  const [error, setError] = useState(null);
  const { loggedInUser } = useContext(UserContext);

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
              <Nav.Link as={Link} to={`/loginpage`}>
                Login
              </Nav.Link>
            </Nav>
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
            <Nav.Link as={Link} to={`/loginpage`}>
              Login
            </Nav.Link>
          </Nav>

          <Login />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
