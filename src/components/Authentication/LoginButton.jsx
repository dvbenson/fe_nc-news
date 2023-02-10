import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function LoginButton({ username }) {
  const { login } = useContext(UserContext);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      {loggedInUser.username === username ? (
        <></>
      ) : (
        <button onClick={() => login(username)}>Login</button>
      )}
    </div>
  );
}

export default LoginButton;
