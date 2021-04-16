import React from 'react';
import {Link} from 'react-router-dom';
import Votes from './Votes';

function BlogTitle({blog, vote}) {
    return (
        <div>
            <Link to={`/${blog.id}`}>{blog.title}</Link>
            <p>{blog.description}</p>
            <Votes votes={blog.votes} vote={vote} postId={blog.id} />
        </div>
    )
};

export default BlogTitle;