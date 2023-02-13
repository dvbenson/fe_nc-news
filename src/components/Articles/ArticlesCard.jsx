import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import "../../styles/Articles/ArticlesCard.css";

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
        <h1 className="article-card-title">{title}</h1>
        <p className="article-card-topic">
          <span className="bold">Topic:</span> {topic}
        </p>
        <p className="article-card-author">
          <span className="bold">By:</span> <i>{author}</i>
        </p>
        <p className="article-card-date">
          <span className="bold">Posted:</span> {created_at.substring(0, 10)}
        </p>
        <p className="article-card-comment-count">
          <span className="bold">Total Comments:</span> {comment_count}
        </p>
        <p className="article-card-votes">
          <span className="bold">Total Votes:</span> {votes}
        </p>
        <img
          className="article-card-img"
          src={article_img_url}
          alt={author}
        ></img>
        <p className="article-card-body">{body.substring(0, 100) + "..."}</p>
        <Link className="continue-read" to={`/articles/${article_id}`}>
          <FaIcons.FaExpandArrowsAlt />
        </Link>
      </div>
    </div>
  );
}

export default ArticlesCard;
