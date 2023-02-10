import React from "react";
import "../../styles/User.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function User({ img, name, username }) {
  return (
    <div className="user-container">
      <div className="avatar-container">
        <img className="avatar" src={img} alt={`${username}`}></img>
      </div>
      <p className="user-name">{name}</p>
      <p className="user-username">@{username}</p>
      <LoginButton username={username} />
      <LogoutButton username={username} />
    </div>
  );
}

export default User;
