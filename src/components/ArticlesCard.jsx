import React from "react";
import "../styles/ArticlesCard.css";

function ArticlesCard({
  title,
  topic,
  author,
  created_at,
  article_img_url,
  body,
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
      </div>
    </div>
  );
}

export default ArticlesCard;
