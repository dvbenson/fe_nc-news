import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { getUsers } from '../../utils';
import ErrorPage from '../ErrorPage';
import '../../styles/Authentication/Login.css';
import { ReactComponent as Brand } from '../../images/logo.svg';
import { Form, Modal, Button, Row, Col, Container } from 'react-bootstrap';

function Login() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const { loggedInUser } = useContext(UserContext);
  const { login } = useContext(UserContext);
  const { logout } = useContext(UserContext);
  const [badDetails, setBadDetails] = useState(false);

  useEffect(() => {
    setError(null);
    getUsers()
      .then((usersFromApi) => {
        setUsers(usersFromApi);
      })
      .catch((err) => {
        setError(err);
      });
  }, [setUsers]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const userLogin = (username, password) => {
    const userCheck = users.filter((user) =>
      user.username === username ? true : false
    );
    if (userCheck && password === loggedInUser.password) {
      login(username);
      setUsername('');
      setPassword('');
      setBadDetails(false);
    } else {
      setBadDetails(true);
    }
  };

  if (error) {
    return <ErrorPage status={error.response.status} />;
  }

  return (
    <>
      {loggedInUser.auth ? (
        <Button className='login-logout' onClick={logout}>
          LOGOUT
        </Button>
      ) : (
        <Button className='login-logout' onClick={handleShow}>
          LOGIN
        </Button>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Container className='login'>
            <Brand className='login-logo' />

            <Modal.Title>Please login below:</Modal.Title>
          </Container>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId='formBasicLogin'>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type='text'
              value={username}
              onChange={handleUserChange}
            ></Form.Control>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={handlePasswordChange}
            ></Form.Control>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer className='login'>
          <Button
            variant='primary'
            onClick={() => {
              handleClose();
              userLogin(username, password);
            }}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
