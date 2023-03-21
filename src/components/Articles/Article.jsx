import React, { useEffect, useState } from 'react';
import Comments from '../Comments/Comments';
import Votes from './Votes';
import ErrorPage from '../ErrorPage';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../utils';
import { Row, Col, Badge, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Articles/Articles.css';

function Article() {
  const [isArticle, setIsArticle] = useState(false);
  const [verifyArticle, setVerifyArticle] = useState('article');
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
        setIsArticle(false);
      });
  }, [article_id]);

  if (error) {
    return <ErrorPage status={error.response.status} />;
  }

  return (
    <main>
      {isLoading ? (
        <p className='loading-message'>
          <i>Making up the news...</i>
        </p>
      ) : (
        <Card>
          <div className='img-container'>
            <Card.Img
              className='img-fluid'
              variant='top'
              src={`${article.article_img_url}`}
              alt={article.author}
            />
          </div>
          <Card.Title className='ind-card'>
            {article.title} bg="light"
          </Card.Title>
          <Card.Subtitle>
            <Row>
              <Col>
                <Badge bg='dark'>{article.topic}</Badge>
              </Col>
              <Col>
                <Badge className='author-badge' bg='dark'>
                  {article.author}
                </Badge>
              </Col>
              <Col>
                <Badge className='date-badge' bg='dark'>
                  {article.created_at.substring(0, 10)}
                </Badge>
              </Col>
            </Row>
          </Card.Subtitle>
          <Card.Body>
            <Card.Text>{article.body}</Card.Text>
          </Card.Body>

          <Row className='votes-container'>
            <Col></Col>
            <Col>
              <Votes
                id={article_id}
                votes={article.votes}
                location={isArticle}
                setLocation={setIsArticle}
                verify={verifyArticle}
              />
            </Col>
          </Row>
          <Container>
            <Comments article_id={article_id} />
          </Container>
        </Card>
      )}
    </main>
  );
}

export default Article;
