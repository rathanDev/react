import { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = () => {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text) {
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(todo, ...todos);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>What's the plan today?</h1>
            <TodoForm
                onSubmit={addTodo}
            />
            <Todo
                todos={todos}
                updateTodo={updateTodo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
            />
        </div>
    )
}

export default TodoList