import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import BlogTitle from './BlogTitle';
import MicroblogApi from './api';
import {getTitles} from './actionCreators';

function Bloglist() {

    const dispatch = useDispatch();
    let titles = useSelector(store => store.titles.sort((a, b) => (b.votes - a.votes)))

    const vote = async (postId, direction) => {
        await MicroblogApi.vote(postId, direction);
        dispatch(getTitles());
    };

    return (
        <div>
            <h3>Recent Blog Posts</h3>
            {titles.map(t => <BlogTitle key={t.id} blog={t} vote={vote} />)}
        </div>
    )
};

export default Bloglist;