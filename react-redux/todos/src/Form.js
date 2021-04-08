import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

function Form() {

    const [data, setData] = useState('');
    const dispatch = useDispatch();

    const handleChange = e => {
        setData(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: "SUBMIT", payload: data});
        setData('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='newTodo'>New Todo: </label>
            <input type='text'
                    name='newTodo'
                    placeholder='New Todo'
                    value={data}
                    onChange={handleChange} />
            <button>Add Todo</button>
        </form>
    )
};

export default Form;