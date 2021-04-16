import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Votes from './Votes';

function BlogPostDetail({post, vote}) {

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>{post.body}</p>
            <Votes votes={post.votes} vote={vote} postId={post.id} />
            {post.comments && 
                <CommentList comments={post.comments} postId={post.id} />}
            <CommentForm postId={post.id} />
        </div>
    )
};

export default BlogPostDetail;