import React from "react";
import "../styles/Navbar.css";

function DropDown({ submenus }) {
  return (
    <ul className="navbar-dropdown">
      {submenus.map((submenu, index) => (
        <li key={index} className="navbar-menu-items">
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default DropDown;
