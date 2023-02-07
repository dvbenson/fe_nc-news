import React, { useEffect, useState } from "react";
import { getArticles } from "../utils";
import { v4 as uuidv4 } from "uuid";
import ArticlesCard from "./ArticlesCard";
import { useParams } from "react-router-dom";
import "../styles/Articles.css";

function Articles() {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topic]);

  return (
    <section>
      <h1>Articles</h1>
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
                article_img_url={article.article_img_url}
                body={article.body}
                article_id={article.article_id}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Articles;
