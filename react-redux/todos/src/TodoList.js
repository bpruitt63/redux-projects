import React from 'react';
import {useSelector} from 'react-redux';
import Todo from './Todo';

function TodoList() {

    const todos = useSelector(store => store.todos);

    return (
        <ul>
            {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </ul>
    )
};

export default TodoList;