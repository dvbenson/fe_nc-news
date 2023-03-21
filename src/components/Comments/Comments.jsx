import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { getCommentsById, deleteCommentById } from '../../utils';
import CommentCard from './CommentCard';
import Toggle from './Toggle';
import ErrorPage from '../ErrorPage';
import AddComment from './AddComment';
import { v4 as uuidv4 } from 'uuid';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Comments/Comments.css';

function Comments({ article_id }) {
  const [isComment, setIsComment] = useState(false);
  const [beTheFirst, setBeTheFirst] = useState(false);
  const [comments, setComments] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    getCommentsById(article_id)
      .then((commentsFromApi) => {
        if (commentsFromApi[0].msg) {
          setBeTheFirst(true);
        } else {
          setComments(commentsFromApi);
        }
        if (commentsFromApi !== null) {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        setBeTheFirst(false);
      });
  }, [article_id, setComments]);

  const handleClick = (e) => {
    setIsHidden(!isHidden);
  };

  const deleteComment = (comment_id) => {
    deleteCommentById({ setError, comment_id })
      .then(() => {
        setComments((prevComments) => {
          return prevComments.filter(
            (comment) => comment.comment_id !== comment_id
          );
        });
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        setIsComment(false);
      });
  };

  if (error) {
    return <ErrorPage status={error.response.status} />;
  }

  if (beTheFirst) {
    return (
      <section>
        {isLoading ? (
          <p className='loading-message'>
            <i>Making up the news...</i>
          </p>
        ) : (
          <div>
            <p>Be the first to comment!</p>
            <AddComment
              article_id={article_id}
              comments={comments}
              setComments={setComments}
            />
          </div>
        )}
      </section>
    );
  }

  return (
    <section>
      {isLoading ? (
        <p className='loading-message'>
          <i>Making up the news...</i>
        </p>
      ) : (
        <div className='comment-toggle'>
          <Toggle label={`Hide/Show Comments`} onClick={handleClick} />
          {isHidden ? (
            <ul className='comments-card-container'>
              <AddComment article_id={article_id} setComments={setComments} />

              {comments.map((comment) => {
                return (
                  <li key={uuidv4()}>
                    <CommentCard
                      className='comment-card-individual'
                      body={comment.body}
                      author={comment.author}
                      created_at={comment.created_at}
                      votes={comment.votes}
                      comment_id={comment.comment_id}
                      isComment={isComment}
                      setIsComment={setIsComment}
                    />

                    {loggedInUser.username === comment.author ? (
                      <Button
                        className='delete-comment-button'
                        onClick={() => deleteComment(comment.comment_id)}
                      >
                        Delete Comment
                      </Button>
                    ) : (
                      <></>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <Alert className='comment-alert' variant={'dark'}>
              What's been said...? Toggle the button to find out!
            </Alert>
          )}
        </div>
      )}
    </section>
  );
}

export default Comments;
