import React, { useState } from 'react';
import '../../styles/Authentication/User.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Container, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function User({ img, name, username }) {
  const [userPassword, setUserPassword] = useState('password123');
  return (
    <div className='user-container'>
      <div className='avatar-container'>
        <img className='avatar' src={img} alt={`${username}`}></img>
      </div>
      <p className='user-name'>{name}</p>
      <p className='user-username'>@{username}</p>
      <LoginButton username={username} />
      <LogoutButton username={username} />
    </div>
  );
}

export default User;
