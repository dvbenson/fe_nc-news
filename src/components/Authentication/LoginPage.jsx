import React, { useState, useEffect } from 'react';
import ErrorPage from '../ErrorPage';
import { getUsers } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/Authentication/Login.css';
import User from './User';

function LoginPage() {
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
    <section className='login-page'>
      {isLoading ? (
        <p className='loading-message'>
          <i>Almost there...</i>
        </p>
      ) : (
        <div className='user-profiles-container'>
          <ul className='user-list'>
            {users.map((user) => {
              return (
                <li key={uuidv4()}>
                  <User
                    className='user-individual'
                    img={user.avatar_url}
                    name={user.name}
                    username={user.username}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}

export default LoginPage;
