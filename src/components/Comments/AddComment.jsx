import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { postComment } from "../../utils";
import { Link } from "react-router-dom";

function AddComment({ article_id, setComments }) {
  const { loggedInUser } = useContext(UserContext);
  const [commentBody, setCommentBody] = useState("");
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
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment-input">
          What you saying:
          <textarea
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
          />
        </label>
        <button type="reset">Cancel</button>
        <button type="submit">Comment</button>
      </form>
      {error !== null ? (
        <div>
          <p>
            Please <Link to={"/loginpage"}>Login</Link> to Post
          </p>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}

export default AddComment;
