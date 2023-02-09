import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  //use is the data stored in context
  const [loggedInUser, setLoggedInUser] = useState({
    username: "",
    auth: false,
  });

  //login updates user data with a name
  const login = (username) => {
    setLoggedInUser((loggedInUser) => ({
      username: username,
      auth: true,
    }));
  };
  // console.log(loggedInUser, "<---loggedin user");

  //logout updates the user data to default
  const logout = () => {
    setLoggedInUser((loggedInUser) => ({
      username: "",
      auth: false,
    }));
  };
  // console.log(loggedInUser, "<---loggedout user");

  return (
    <UserContext.Provider value={{ loggedInUser, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};
