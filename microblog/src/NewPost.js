import React, {useState} from 'react';
import PostForm from './PostForm';
import {Link, useHistory} from 'react-router-dom';
import {newPost} from './actionCreators';
import { useDispatch } from 'react-redux';

function NewPost() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [data, setData] = useState({title: '', description: '', body: ''});

    const handleChange = e => {
        const {name, value} = e.target;
        setData(d => ({
            ...d,
            [name]: value
        }))
    };

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(newPost(data));
        history.push(`/`);
    };

    return (
        <div>
            <h2>New Post</h2>
            <PostForm data={data}
                        handleChange={handleChange} 
                        handleSubmit={handleSubmit} />
            <Link to='/'>Cancel</Link>
        </div>
    )
};

export default NewPost;