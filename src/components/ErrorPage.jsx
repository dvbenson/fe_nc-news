import React from "react";
import { Link } from "react-router-dom";
import "../styles/ErrorPage.css";

function ErrorPage({ status, msg }) {
  return (
    <main className="error-page-main">
      <h1 className="error-page-title">Woops, something went wrong...</h1>
      <p className="error-page-body">
        <span className="bold">{status}</span> {msg}
      </p>
      <div className="error-page-home-link">
        <Link to="/">
          E.T phone... <i>Home</i>
        </Link>
      </div>
    </main>
  );
}

export default ErrorPage;
