import {useState} from 'react'
import TodoForm from './TodoForm'

const TodoList = () => {

    const [todos, setTodos] = useState([])

    return(
        <div>
            <h1>What's the plan today?</h1>
            <TodoForm></TodoForm>
        </div>
    )
}

export default TodoList