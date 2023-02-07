import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import ArticlesCard from "./ArticlesCard";
import { useLocation } from "react-router-dom";

function Article(article_id) {
  const location = useLocation();
  const { id } = location.state;

  const [articleId, setArticleId] = useState("");
  const [article, setArticle] = useState({});
  //   const { article_id } = useParams();

  //   useEffect(() => {
  //     getArticleById(article_id).then((articleFromApi) => {
  //       setArticle(articleFromApi);
  //     });
  //   }, [article_id]);

  return <main>Article</main>;
}

export default Article;
