import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { newComment } from './actionCreators';

function CommentForm({postId}) {

    const dispatch = useDispatch();
    const [data, setData] = useState({text: ''});

    const handleChange = e => {
        const {name, value} = e.target;
        setData(d => ({
            ...d,
            [name]: value
        }))
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(newComment(postId, data));
        setData({text: ''})
    };

    return (
        <form>
            <input name='text' 
                    placeholder='New Comment'
                    onChange={handleChange} 
                    value={data.text} />
            <button onClick={handleSubmit}>Add</button>
        </form>
    )
};

export default CommentForm;