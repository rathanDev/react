import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

const Todo = ({ todo, completeTodo, removeTodo, updateTodo }) => {
    return (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={todo.id}
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
                    onClick={() => setImmediate({ id: todo.id, value: todo.text })}
                />
            </div>


        </div>
    )
}

export default Todo;