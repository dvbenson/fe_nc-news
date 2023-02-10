import React from "react";
import "../../styles/CommentCard.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

function CommentCard({ body, author, created_at, votes, comment_id }) {
  return (
    <div className="comment-card">
      <div className="comment-card-container">
        <p className="comment-body">{body}</p>
        <p className="comment-author">
          <span className="bold">By</span> <i>{author}</i>
        </p>
        <p className="comment-date">{created_at.substring(0, 10)}</p>
        <p className="comment-votes">
          <span className="bold">Total Votes:</span> {votes}
        </p>
        <button className="comment-upvotes">
          <FaIcons.FaArrowUp />
        </button>
        <button className="comment-downvotes">
          <FaIcons.FaArrowDown />
        </button>
      </div>
    </div>
  );
}

export default CommentCard;
