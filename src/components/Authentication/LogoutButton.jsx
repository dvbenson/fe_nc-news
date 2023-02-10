import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function LogoutButton() {
  const { logout } = useContext(UserContext);

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default LogoutButton;
