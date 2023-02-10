import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { v4 as uuidv4 } from "uuid";
import CommentCard from "./CommentCard";
import Toggle from "./Toggle";
import ErrorPage from "../ErrorPage";
import "../../styles/Comments.css";
import { getCommentsById, deleteCommentById } from "../../utils";

function Comments({ article_id }) {
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
        setComments(commentsFromApi);

        if (commentsFromApi !== null) {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [article_id]);

  const handleClick = (e) => {
    setIsHidden(!isHidden);
  };

  const deleteComment = (comment_id) => {
    deleteCommentById({ setError, comment_id })
      .then(() => {
        setComments((currComments) => {
          return currComments.filter(
            (comment) => comment.comment_id !== comment_id
          );
        });
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

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
        <div>
          <Toggle label={`Hide/Show Comments`} onClick={handleClick} />
          {isHidden ? (
            <ul className="comments-card-container">
              {comments.map((comment) => {
                return (
                  <li key={uuidv4()}>
                    <CommentCard
                      className="comment-card-individual"
                      body={comment.body}
                      author={comment.author}
                      created_at={comment.created_at}
                      votes={comment.votes}
                      comment_id={comment.comment_id}
                    />
                    {loggedInUser.username === comment.author ? (
                      <button
                        className="delete-comment-button"
                        onClick={() => deleteComment(comment.comment_id)}
                      >
                        Delete Comment
                      </button>
                    ) : (
                      <></>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>What's been said...?</p>
          )}
        </div>
      )}
    </section>
  );
}

export default Comments;
