import React from 'react';
import Comment from './Comment';

function CommentList({comments, postId}) {

    return (
        <div>
            {comments.map(c => <Comment comment={c} 
                                        postId={postId} 
                                        key={c.id} />)}
        </div>
    )
};

export default CommentList;