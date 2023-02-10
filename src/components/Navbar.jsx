import React, { useState, useEffect } from "react";
import ErrorPage from "./ErrorPage";
import { getTopics } from "../utils";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "../styles/Navbar.css";
import { ReactComponent as Brand } from "../images/logo.svg";

function Navbar() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    getTopics()
      .then((topicsFromApi) => {
        setTopics(topicsFromApi);
      })
      .catch((err) => {
        setError(err);
      });
  }, [setTopics]);

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (error) {
    return <ErrorPage />;
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Brand />
        </div>
        <div className="navbar-elements">
          <ul>
            <li key={uuidv4()}>
              <Link to="/">Home</Link>
            </li>
            <li key={uuidv4()}>
              <Link to="/about">About</Link>
            </li>
            <li key={uuidv4()}>
              <Link to="/contact">Contact</Link>
            </li>
            <li key={uuidv4()}>
              <Link to="/articles">All News</Link>
            </li>

            {topics.map((topic) => {
              return (
                <li key={uuidv4()}>
                  <Link to={`/topics/${topic.slug}`}>
                    {capFirstLetter(topic.slug)}
                  </Link>
                </li>
              );
            })}

            <li key={uuidv4()}>
              <Link to={`/loginpage`}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
