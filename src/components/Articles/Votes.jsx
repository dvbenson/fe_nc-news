import React, { useState } from "react";
import { patchArticleVote } from "../../utils";

function Votes({ votes, article_id }) {
  const [voteChange, setVoteChange] = useState(0);

  const incVotes = (increase) => {
    setVoteChange((currVoteChange) => currVoteChange + increase);
    patchArticleVote(article_id, increase);
    console.log(voteChange);
  };

  const decVotes = (increase) => {
    setVoteChange((currVoteChange) => currVoteChange + increase);
    patchArticleVote(article_id, increase);
    console.log(voteChange);
  };

  return (
    <div>
      <button
        disabled={voteChange === 1}
        className="upvote"
        onClick={() => incVotes(1)}
      >
        Up
      </button>
      <span>{votes + voteChange} votes</span>
      <button
        disabled={voteChange === -1}
        className="downvote"
        onClick={() => decVotes(-1)}
      >
        Down
      </button>
    </div>
  );
}

export default Votes;
