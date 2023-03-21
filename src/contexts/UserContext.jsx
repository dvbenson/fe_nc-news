import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  //use is the data stored in context
  const [loggedInUser, setLoggedInUser] = useState({
    username: '',
    auth: false,
    password: 'password123',
  });

  //login updates user data with a name
  const login = (username) => {
    setLoggedInUser((loggedInUser) => ({
      username: username,
      auth: true,
      password: 'password123',
    }));
  };

  //logout updates the user data to default
  const logout = () => {
    setLoggedInUser((loggedInUser) => ({
      username: '',
      auth: false,
      password: 'password123',
    }));
  };

  return (
    <UserContext.Provider value={{ loggedInUser, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};
