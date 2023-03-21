import React, { useState } from 'react';
import { patchArticleVote, patchCommentVote } from '../../utils';
import * as FaIcons from 'react-icons/fa';
import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Votes({ votes, id, setLocation, verify }) {
  const [voteChange, setVoteChange] = useState(0);
  const [voteCount, setVoteCount] = useState(votes);

  const incVotes = (increase) => {
    if (verify === 'comment') {
      setVoteCount((prevVoteCount) => prevVoteCount + increase);
      setVoteChange((currVoteChange) => currVoteChange + increase);
      patchCommentVote(id, increase);
    }
    if (verify === 'article') {
      setVoteCount((prevVoteCount) => prevVoteCount + increase);
      setVoteChange((currVoteChange) => currVoteChange + increase);
      patchArticleVote(id, increase);
    }
  };

  const decVotes = (increase) => {
    if (verify === 'comment') {
      setVoteCount((prevVoteCount) => prevVoteCount + increase);
      setVoteChange((currVoteChange) => currVoteChange + increase);
      patchCommentVote(id, increase);
    }
    if (verify === 'article') {
      setVoteCount((prevVoteCount) => prevVoteCount + increase);
      setVoteChange((currVoteChange) => currVoteChange + increase);
      patchArticleVote(id, increase);
    }
  };

  return (
    <>
      <ButtonGroup size='sm'>
        <Button
          variant='secondary'
          disabled={voteChange === 1}
          className='upvote'
          onClick={() => {
            incVotes(1);
            setLocation(true);
          }}
        >
          <FaIcons.FaArrowUp />
        </Button>
        <Button variant='secondary' disabled='disabled'>
          Votes: {voteCount}
        </Button>
        <Button
          variant='secondary'
          disabled={voteChange === -1}
          className='downvote'
          onClick={() => {
            decVotes(-1);
            setLocation(true);
          }}
        >
          <FaIcons.FaArrowDown />
        </Button>
      </ButtonGroup>
    </>
  );
}

export default Votes;
