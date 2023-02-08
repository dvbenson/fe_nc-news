import React from "react";
import "../styles/User.css";

function User({ img, name, username, onClick }) {
  return (
    <div className="user-container">
      <div className="avatar-container">
        <img className="avatar" src={img} alt={`${username}`}></img>
      </div>
      <p>{name}</p>
      <p>{username}</p>
      <button>Login</button>
    </div>
  );
}

export default User;
