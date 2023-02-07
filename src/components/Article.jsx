import React, { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsById } from "../utils";

function Article() {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    Promise.all([getArticleById(article_id), getCommentsById(article_id)]).then(
      ([articleFromApi, commentsFromApi]) => {
        setArticle(articleFromApi);
        setComments(commentsFromApi);
      }
    );
  }, [setArticle]);

  return (
    <div className="article-card">
      <div className="article-card-container">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-topic">Topic: {article.topic}</p>
        <p className="article-author">
          By <i>{article.author}</i>
        </p>
        <p className="article-date">{article.created_at}</p>
        <img
          className="article-img"
          src={article.article_img_url}
          alt={article.author}
        ></img>
        <p className="article-body">{article.body}</p>
      </div>

      <Comments comments={comments} />
    </div>
  );
}

export default Article;
