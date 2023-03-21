import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserCard({ img, name, username }) {
  return (
    <Card className='complete-card' style={{ width: '20rem' }}>
      <Card.Img variant='top' src={img} alt={`${username}`} />
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>@{username}</Card.Subtitle>
      </Card.Footer>
    </Card>
  );
}

export default UserCard;
