import React, { useReducer } from 'react';
import { optionalInitialTodos, reducerCallback } from './helpers';

const ReducerExample = () => {
    const [todos, dispatch] = useReducer(reducerCallback, optionalInitialTodos);

    const toggleTodoState = (todo) => {
        dispatch({ type: 'TOGGLE', id: todo.id });
    };

    return todos.map((todo) => (
        <div key={todo.id}>
            <label>
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => toggleTodoState(todo)}
                />
                {todo.title}
            </label>
        </div>
    ));
};

export default ReducerExample;
