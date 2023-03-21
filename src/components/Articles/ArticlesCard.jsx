import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { deleteArticleById } from '../../utils';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import '../../styles/Articles/Articles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ArticlesCard({
  title,
  topic,
  author,
  created_at,
  comment_count,
  votes,
  article_img_url,
  body,
  article_id,
  setError,
  articles,
  setArticles,
}) {
  const { loggedInUser } = useContext(UserContext);

  const deleteArticle = (article_id) => {
    deleteArticleById({ setError, article_id })
      .then(() => {
        setArticles((prevArticles) => {
          return prevArticles.filter(
            (article) => article.article_id !== article_id
          );
        });
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <Card bg='light' text='dark'>
      <Badge className='topic-badge' pill bg='secondary'>
        {topic}
      </Badge>
      <Card.Img
        variant='top'
        src={`${article_img_url}`}
        alt={author}
      ></Card.Img>

      <Card.Title>{title}</Card.Title>
      <Card.Subtitle>
        <Row>
          <Col>
            <Badge className='author-badge' bg='dark'>
              {author}
            </Badge>
          </Col>
          <Col>
            <Badge className='date-badge' bg='dark'>
              {created_at.substring(0, 10)}
            </Badge>
          </Col>
        </Row>
      </Card.Subtitle>
      <Card.Body>
        <Card.Text>{body.substring(0, 100) + '...'}</Card.Text>
      </Card.Body>
      <Card.Body>
        <FaIcons.FaThumbsUp />
        {votes}
        <FaIcons.FaCommentDots /> {comment_count}
      </Card.Body>
      <Card.Footer>
        <Row>
          {loggedInUser.username === author ? (
            <Col>
              <Button
                variant='secondary'
                onClick={() => deleteArticle(article_id)}
                className='article-delete-btn'
              >
                Delete Article
              </Button>
            </Col>
          ) : (
            <></>
          )}
          <Col>
            <Button
              variant='secondary'
              as={Link}
              to={`/articles/${article_id}`}
            >
              Continue reading...
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default ArticlesCard;
