import React from 'react';
import Todo from './todo';

const TodoList = () => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                <Todo />
                <Todo />
                <Todo />
            </ul>
        </div>
    )
}

export default TodoList;