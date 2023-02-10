import React, { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils";

function Article() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

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

      <Comments article_id={article_id} />
    </div>
  );
}

export default Article;
