import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import { getUsers } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/Authentication/Login.css';
import UserCard from './UserCard';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <section className='user-list'>
      {isLoading ? (
        <p className='loading-message'>
          <i>Almost there...</i>
        </p>
      ) : (
        <Row xs={1} md={1} lg={1}>
          {users.map((user) => {
            return (
              <Col key={uuidv4()} className='user-position'>
                <UserCard
                  as={Link}
                  to={`/users/${user.username}`}
                  className='user-individual'
                  img={user.avatar_url}
                  name={user.name}
                  username={user.username}
                />
              </Col>
            );
          })}
        </Row>
      )}
    </section>
  );
}

export default UserList;
