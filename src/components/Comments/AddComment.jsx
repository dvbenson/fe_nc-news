import React from "react";

function AddComment() {
  return (
    <section>
      <form>
        <label htmlFor="comment-input">What you saying: </label>
        <input className="comment-input" type="textarea"></input>
        <button>Cancel</button>
        <button>Comment</button>
      </form>
    </section>
  );
}

export default AddComment;
