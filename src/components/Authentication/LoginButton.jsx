import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Button } from 'react-bootstrap';
import '../../styles/Authentication/Login.css';

function LoginButton({ username }) {
  const { login } = useContext(UserContext);
  const { logout } = useContext(UserContext);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      {loggedInUser.username === username ? (
        <Button className='logout-button' onClick={logout}>
          {' '}
          Logout
        </Button>
      ) : (
        <Button className='login-button' onClick={() => login(username)}>
          Login
        </Button>
      )}
    </div>
  );
}

export default LoginButton;
