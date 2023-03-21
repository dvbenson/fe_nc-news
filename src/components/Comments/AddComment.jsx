import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { postComment } from '../../utils';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Comments/Comments.css';

function AddComment({ article_id, comments, setComments }) {
  const { loggedInUser } = useContext(UserContext);
  const [commentBody, setCommentBody] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    postComment(commentBody, loggedInUser, article_id)
      .then((commentFromApi) => {
        setComments((currComments) => {
          return [commentFromApi, ...currComments];
        });
      })
      .then(() => {
        setCommentBody('');
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <section className='comment-form'>
      <Form.Group onSubmit={handleSubmit} controlId='formBasicComment'>
        <Form.Label>What you saying:</Form.Label>
        <Form.Control
          type='textarea'
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        />
        <div className='comment-submit-btn'>
          <Button type='submit'>Comment</Button>
        </div>
      </Form.Group>
      {error !== null ? (
        <div>
          <p>
            Please <Link to={'/loginpage'}>Login</Link> to Post
          </p>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}

export default AddComment;
