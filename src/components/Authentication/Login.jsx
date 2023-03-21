import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { getUsers } from '../../utils';
import ErrorPage from '../ErrorPage';
import LoginButton from './LoginButton';
import { Form, Modal, Button } from 'react-bootstrap';

function Login() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    getUsers()
      .then((usersFromApi) => {
        setUsers(usersFromApi);

        if (usersFromApi !== null) {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setError(err);

        setIsLoading(false);
      });
  }, [setUsers]);

  if (error) {
    return <ErrorPage status={error.response.status} />;
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  console.log(username, password);
  const handleSubmit = () => {};
  return (
    <>
      <LoginButton />
      {/* <Button onClick={handleShow}>LOGIN</Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group onSubmit={handleSubmit}>
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

        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' type='submit' onClick={handleClose}>
            Enter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
