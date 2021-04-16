import React from 'react';

function Votes({votes, vote, postId}) {

    const up = () => {
        vote(postId, 'up');
    };

    const down = () => {
        vote(postId, 'down');
    };

    return (
        <div>
            <p>{votes} votes</p>
            <button onClick={up}>Upvote</button>
            <button onClick={down}>Downvote</button>
        </div>
    )
};

export default Votes;