import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getArticles } from '../../utils';
import ArticlesCard from '../Articles/ArticlesCard';
import NewArticleModal from './NewArticleModal';
import ErrorPage from '../ErrorPage';
import { v4 as uuidv4 } from 'uuid';
import { Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Articles/Articles.css';

function Articles({ topics, setTopics }) {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('created_at');
  const [order, setOrder] = useState('asc');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { topic } = useParams();

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    getArticles(topic, searchParams)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi.articles);

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
    <section>
      <form
        className='article-search'
        onSubmit={handleSubmit}
        id='articleSearch'
      >
        <label htmlFor='sort-by'>
          Sort By:
          <select
            className='select'
            id='sort-by'
            name='sort-by'
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option key='created_at' value='created_at'>
              Date
            </option>
            <option key='comment_count' value='comment_count'>
              Comments
            </option>
            <option key='votes' value='votes'>
              Votes
            </option>
          </select>
        </label>
        <label htmlFor='order'>
          Order:
          <select
            className='select'
            id='order'
            name='order'
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option key='asc' value='asc'>
              Asc
            </option>
            <option key='desc' value='desc'>
              Desc
            </option>
          </select>
        </label>
        <div className='article-search-btn'>
          <Button variant='secondary' type='submit'>
            Search
          </Button>
        </div>
        <div className='modal-btn'>
          <NewArticleModal
            topics={topics}
            setTopics={setTopics}
            articles={articles}
            setArticles={setArticles}
          ></NewArticleModal>
        </div>
      </form>

      {isLoading ? (
        <p className='loading-message'>
          <i>Making up the news...</i>
        </p>
      ) : (
        <section className='article-list'>
          <Row xs={1} md={3}>
            {articles.map((article) => {
              return (
                <Col key={uuidv4()}>
                  <ArticlesCard
                    title={article.title}
                    topic={article.topic}
                    author={article.author}
                    created_at={article.created_at}
                    comment_count={article.comment_count}
                    votes={article.votes}
                    article_img_url={article.article_img_url}
                    body={article.body}
                    article_id={article.article_id}
                    setError={setError}
                    articles={articles}
                    setArticles={setArticles}
                  />
                </Col>
              );
            })}
          </Row>
        </section>
      )}
    </section>
  );
}

export default Articles;
