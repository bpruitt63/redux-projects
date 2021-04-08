import React from 'react';
import {useDispatch} from 'react-redux';

function Todo({todo}) {

    const dispatch = useDispatch();
    const remove = e => {
        const id = e.target.parentElement.id;
        dispatch({type: "REMOVE", payload: id})
    };

    const toggle = e => {
        const id = e.target.parentElement.id;
        dispatch({type: "TOGGLE", payload: id})
    };

    return (
        <>
            <li className={todo.isDone ? 'done' : 'notDone'} id={todo.id}>
                <span onClick={toggle}>{todo.todo}</span>
                <button onClick={remove}>Remove Todo</button>
            </li>
        </>
    )
};

export default Todo;