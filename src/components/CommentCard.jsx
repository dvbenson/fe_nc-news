import React from "react";
import "../styles/CommentCard.css";

function CommentCard({ body, author, created_at, votes, comment_id }) {
  return (
    <div className="comment-card">
      <div className="comment-card-container">
        <p className="comment-body">{body}</p>
        <p className="comment-author">
          By <i>{author}</i>
        </p>
        <p className="comment-date">{created_at}</p>
        <p className="comment-votes">Total Votes: {votes}</p>
        <button className="comment-upvotes">UP</button>
        <button className="comment-downvotes">DOWN</button>
      </div>
    </div>
  );
}

export default CommentCard;
