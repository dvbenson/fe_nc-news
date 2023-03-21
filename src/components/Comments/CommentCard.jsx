import React, { useState } from 'react';
import Votes from '../Articles/Votes';
import '../../styles/Comments/CommentCard.css';
import { Card, Col, Row, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Comments/Comments.css';

function CommentCard({
  body,
  author,
  created_at,
  votes,
  comment_id,
  isComment,
  setIsComment,
}) {
  const [verifyComment, setVerifyComment] = useState('comment');
  return (
    <Card bg='light' border='dark'>
      <Card.Header>
        <Row>
          <Col>
            <Badge bg='dark' className='author-badge-comment'>
              {author}
            </Badge>
            <Badge bg='dark'>{created_at.substring(0, 10)}</Badge>
          </Col>
        </Row>
      </Card.Header>

      <Row>
        <Col className='comment-body'>{body}</Col>
      </Row>

      <Row>
        <Col className='footer-votes'>
          <Votes
            id={comment_id}
            votes={votes}
            location={isComment}
            setLocation={setIsComment}
            verify={verifyComment}
          />
        </Col>
      </Row>
    </Card>
  );
}

export default CommentCard;
