import React from "react";
import { Link } from "react-router-dom";
import Article from "./Article";
import "../styles/ArticlesCard.css";

function ArticlesCard({
  title,
  topic,
  author,
  created_at,
  article_img_url,
  body,
  id,
}) {
  return (
    <div className="article-card">
      <div className="article-card-container">
        <h1 className="article-title">{title}</h1>
        <p className="article-topic">Topic: {topic}</p>
        <p className="article-author">
          By <i>{author}</i>
        </p>
        <p className="article-date">{created_at}</p>
        <img className="article-img" src={article_img_url} alt={author}></img>
        <p className="article-body">{body}</p>
        <Link to="/articles/:article_id" state={{ from: "id" }}>
          Continue reading...
        </Link>
      </div>
    </div>
  );
}

export default ArticlesCard;