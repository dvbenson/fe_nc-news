import React from "react";
import DropDown from "./DropDown";
import "../styles/Navbar.css";

function NavBarMenuItems({ items }) {
  return (
    <li className="navbar-menu-items">
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.title}{" "}
          </button>
          <DropDown submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
}
export default NavBarMenuItems;
