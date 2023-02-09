import React from "react";
import { Link } from "react-router-dom";
import "../styles/ArticlesCard.css";

function ArticlesCard({
  title,
  topic,
  author,
  created_at,
  comment_count,
  votes,
  article_img_url,
  body,
  article_id,
}) {
  return (
    <div className="article-card">
      <div className="article-card-container">
        <h1 className="article-title">{title}</h1>
        <p className="article-topic">
          <span className="bold">Topic:</span> {topic}
        </p>
        <p className="article-author">
          <span className="bold">By:</span> <i>{author}</i>
        </p>
        <p className="article-date">
          <span className="bold">Posted:</span> {created_at.substring(0, 10)}
        </p>
        <p className="article-comment-count">
          <span className="bold">Total Comments:</span> {comment_count}
        </p>
        <p className="article-votes">
          <span className="bold">Total Votes:</span> {votes}
        </p>
        <img className="article-img" src={article_img_url} alt={author}></img>
        <p className="article-body">{body.substring(0, 100) + "..."}</p>
        <Link className="continue-read" to={`/articles/${article_id}`}>
          Continue Reading...
        </Link>
      </div>
    </div>
  );
}

export default ArticlesCard;
