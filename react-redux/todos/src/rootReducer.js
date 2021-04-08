const INITIAL_STATE = {todos: [], id: 1};

function rootReducer(state=INITIAL_STATE, action) {
    switch (action.type) {

        case "SUBMIT":
            return {...state,
                        todos: [...state.todos,
                                    {
                                        todo: action.payload,
                                        isDone: false,
                                        id: state.id
                                    }],
                        id: state.id + 1};

        case "REMOVE":
            let todos = [...state.todos];
            todos = todos.filter(todo => todo.id !== parseInt(action.payload));
            return {...state,
                        todos: todos
                    };

        case "TOGGLE":
            let toggleTodos = [...state.todos];
            const todo = toggleTodos.find(todo => todo.id === parseInt(action.payload));
            todo.isDone = !todo.isDone;
            return {...state,
                        todos: toggleTodos
                    };

        default:
            return state;
    };
};

export default rootReducer;