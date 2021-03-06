import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos }) => {

    const inputTextHandler = (e) => {
        const text = e.target.value;
        console.log(text);
        setInputText(text);
    }

    const submitTodoHandler = (e) => {
        // const inputText = e.target.value;
        console.log(inputText);
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText('');
    }

    return (
        <form>

            <input
                onChange={inputTextHandler}
                value={inputText}
                type="text" className="todo-input"
            />

            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>

        </form>
    );

}

export default Form;