import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CommentCard from "./CommentCard";
import Toggle from "./Toggle";
import "../styles/Comments.css";

function Comments({ comments }) {
  const [isHidden, setIsHidden] = useState(true);

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
