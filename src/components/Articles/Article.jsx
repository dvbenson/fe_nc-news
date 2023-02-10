import React, { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import ErrorPage from "../ErrorPage";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils";

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
      )}
    </section>
  );
}

export default Article;
