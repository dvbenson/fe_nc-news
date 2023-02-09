import React from "react";
import { ReactComponent as Brand } from "../images/logo.svg";
import AltNavBar from "./AltNavBar";
import "../styles/Navbar.css";

function Header() {
  return (
    <header>
      <div className="navbar-container">
        <div className="navbar-elements">
          <div className="navbar-logo">
            <Brand />
            <AltNavBar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
