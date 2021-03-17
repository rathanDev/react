import React, { useState, useEffect } from 'react';

const Todo = ({ text, id }) => {

    const deleteHandler = () => {
        console.log('TodoComponent deleteHandler');
    };

    return (
        <div className="todo">
            <li className='todo-item'>{text}</li>
            <button className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button className='trash-btn' onClick={deleteHandler}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
}

export default Todo;