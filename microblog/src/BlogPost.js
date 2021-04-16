import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PostForm from './PostForm';
import BlogPostDetail from './BlogPostDetail';
import {editPost, getPost} from './actionCreators';
import MicroblogApi from './api';

function BlogPost() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [isEdit, setIsEdit] = useState(false);
    const {postId} = useParams();

    useEffect(() => {
        dispatch(getPost(postId))
    }, [dispatch, postId]);

    const post = useSelector(store => store.posts);
    const [data, setData] = useState(post);


    const toggleEdit = () => {
        setIsEdit(isEdit => !isEdit);
        setData(post);
    };


    const handleChange = e => {
        const {name, value} = e.target;
        setData(d => ({
            ...d,
            [name]: value
        }))
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(editPost(postId, data));
        setIsEdit(false);
    };

    const remove = async () => {
        await MicroblogApi.deletePost(postId);
        history.push('/');
    };

    const vote = async (postId, direction) => {
        await MicroblogApi.vote(postId, direction);
        dispatch(getPost(postId));
    };

    return (
        <div>
            <button onClick={toggleEdit}>
                {isEdit ? 'Cancel Edit' : 'Edit Post'}
            </button>
            <button onClick={remove}>Delete Post</button>
            {isEdit ? 
                <PostForm data={data}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit} />
            :
                <BlogPostDetail post={post} vote={vote} />
            }
        </div>
    )
};

export default BlogPost;