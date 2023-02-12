import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "../../styles/Authentication/Login.css";

function LogoutButton({ username }) {
  const { logout } = useContext(UserContext);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      {loggedInUser.username === username ? (
        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default LogoutButton;
