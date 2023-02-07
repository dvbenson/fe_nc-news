import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CommentCard from "./CommentCard";
import Toggle from "./Toggle";
import "../styles/Comments.css";
import { getCommentsById } from "../utils";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    getCommentsById(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [article_id]);

  const handleClick = (e) => {
    setIsHidden(!isHidden);
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
