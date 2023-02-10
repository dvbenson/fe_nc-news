import React, { useState, useEffect } from "react";

import { getUsers } from "../../utils";
import { v4 as uuidv4 } from "uuid";
import "../../styles/Login.css";
import User from "./User";

function LoginPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, [setUsers]);

  return (
    <section className="login-page">
      <h1>Log-in Page</h1>
      <div className="user-profiles">
        <ul className="user-list">
          {users.map((user) => {
            return (
              <li key={uuidv4()}>
                <User
                  className="user-individual"
                  img={user.avatar_url}
                  name={user.name}
                  username={user.username}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default LoginPage;
