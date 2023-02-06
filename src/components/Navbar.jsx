import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-elements">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>Topic1</li>
            <li>Topic2</li>
            <li>Topic3</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
