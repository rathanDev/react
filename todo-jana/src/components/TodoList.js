import { useState } from 'react'
import Todo from "./Todo"

const TodoList = ({ todos, setTodos }) => {

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text)
            return
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id)
                todo.isComplete = true
            return todo
        })
        setTodos(updatedTodos)
    }

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removedArr)
    }

    return todos
        .map((todo, index) => (
            <Todo
                todo={todo}
                completeTodo={completeTodo}
                updateTodo={updateTodo}
                removeTodo={removeTodo}
            />
        ))
}

export default TodoList;

