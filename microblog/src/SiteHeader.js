import React from 'react';
import {Link} from 'react-router-dom';

function SiteHeader() {
    return (
        <div>
            <h1>Microblog</h1>
            <p>A site where you can blog your micros!</p>
            <Link to='/'>Blog</Link>
            <Link to='/new'>Add a new post</Link>
        </div>
    )
};

export default SiteHeader;