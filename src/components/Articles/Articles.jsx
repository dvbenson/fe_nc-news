import React, { useEffect, useState } from "react";
import { getArticles } from "../../utils";
import { v4 as uuidv4 } from "uuid";
import ArticlesCard from "../Articles/ArticlesCard";
import ErrorPage from "../ErrorPage";
import { useParams, useSearchParams } from "react-router-dom";
import "../../styles/Articles.css";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("asc");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { topic } = useParams();

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    getArticles(topic, searchParams)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);

        if (articlesFromApi !== null) {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setError(err);

        setIsLoading(false);
      });
  }, [topic, searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let params = {
      sort_by: sortBy,
      order: order,
    };

    const newSearchParams = new URLSearchParams(params);
    return setSearchParams(newSearchParams);
  };

  if (error) {
    return <ErrorPage status={error.response.status} />;
  }
  return (
    <section className="search-form-articles">
      <form onSubmit={handleSubmit}>
        <fieldset className="articles-fieldset">
          <legend>Refine your search:</legend>
          <label htmlFor="sort-by">Sort By:</label>
          <select
            id="sort-by"
            name="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option key="created_at" value="created_at">
              Date
            </option>
            <option key="comment_count" value="comment_count">
              Comments
            </option>
            <option key="votes" value="votes">
              Votes
            </option>
          </select>
          <label htmlFor="order">Order:</label>
          <select
            id="order"
            name="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option key="asc" value="asc">
              Asc
            </option>
            <option key="desc" value="desc">
              Desc
            </option>
          </select>
          <button type="submit">Search</button>
        </fieldset>
      </form>
      {isLoading ? (
        <p className="loading-message">
          <i>Making up the news...</i>
        </p>
      ) : (
        <ul className="articles-card-container">
          {articles.map((article) => {
            return (
              <li key={uuidv4()}>
                <ArticlesCard
                  className="article-card-individual"
                  title={article.title}
                  topic={article.topic}
                  author={article.author}
                  created_at={article.created_at}
                  comment_count={article.comment_count}
                  votes={article.votes}
                  article_img_url={article.article_img_url}
                  body={article.body}
                  article_id={article.article_id}
                />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default Articles;
