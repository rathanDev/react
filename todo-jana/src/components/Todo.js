import { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'

const Todo = ({ todo, completeTodo, removeTodo, updateTodo }) => {

    console.log('todo.id', todo.id);

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
        < div
            key={todo.id}
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        >

            <div
                key={todo.id}
                onClick={() => completeTodo(todo.id)}
            >
                {todo.text}
            </div>

            <div
                className="icons"
            >
                <RiCloseCircleLine
                    className='delete-icon'
                    onClick={() => removeTodo(todo.id)}
                />
                <TiEdit
                    className='edit-icon'
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                />
            </div>

        </div >
    )
}

export default Todo;