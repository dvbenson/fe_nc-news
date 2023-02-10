import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { v4 as uuidv4 } from "uuid";
import CommentCard from "./CommentCard";
import Toggle from "./Toggle";
import "../../styles/Comments.css";
import { getCommentsById, deleteCommentById } from "../../utils";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    getCommentsById(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);

  const handleClick = (e) => {
    setIsHidden(!isHidden);
  };

  const deleteComment = (comment_id) => {
    deleteCommentById(comment_id);
    setComments((currComments) => {
      return currComments.filter(
        (comment) => comment.comment_id !== comment_id
      );
    });
  };

  return (
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
  );
}

export default Comments;
