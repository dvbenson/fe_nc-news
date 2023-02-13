import React, { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import Votes from "./Votes";
import ErrorPage from "../ErrorPage";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils";
import "../../styles/Articles/Article.css";

function Article() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    getArticleById(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);

        if (articleFromApi !== null) {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setError(err);

        setIsLoading(false);
      });
  }, [article_id]);

  if (error) {
    return <ErrorPage status={error.response.status} />;
  }

  return (
    <section>
      {isLoading ? (
        <p className="loading-message">
          <i>Making up the news...</i>
        </p>
      ) : (
        <div className="article">
          <div className="article-container">
            <h1 className="article-title">{article.title}</h1>
            <p className="article-topic">
              <span className="bold">Topic: </span>
              {article.topic}
            </p>
            <p className="article-author">
              <span className="bold">By</span> <i>{article.author}</i>
            </p>
            <p className="article-date">
              {article.created_at.substring(0, 10)}
            </p>
            <div className="article-img-container">
              <img
                className="article-img"
                src={article.article_img_url}
                alt={article.author}
              ></img>
            </div>

            <p className="article-body">{article.body}</p>
          </div>
          <section className="article=votes">
            <Votes article_id={article_id} votes={article.votes} />
          </section>
          <Comments article_id={article_id} />
        </div>
      )}
    </section>
  );
}

export default Article;
