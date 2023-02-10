import React from "react";
import { Link } from "react-router-dom";
import "../styles/ErrorPage.css";

function ErrorPage({ status }) {
  if (status === 404) {
    return (
      <main className="error-page-main">
        <h1 className="error-page-title">Woops, something went wrong...</h1>
        <p className="error-page-body">
          <span className="bold">{status}:</span> What you were looking for, we
          ain't got. Try something else.
        </p>
        <div className="error-page-home-link">
          <Link to="/">
            E.T phone... <i>Home</i>
          </Link>
        </div>
      </main>
    );
  } else if (status === 400) {
    return (
      <main className="error-page-main">
        <h1 className="error-page-title">Woops, something went wrong...</h1>
        <p className="error-page-body">
          <span className="bold">{status}:</span> You did something not pretty,
          check again and give it another go.
        </p>
        <div className="error-page-home-link">
          <Link to="/">
            E.T phone... <i>Home</i>
          </Link>
        </div>
      </main>
    );
  }
}

export default ErrorPage;
