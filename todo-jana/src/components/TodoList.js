import Todo from "./Todo"

const TodoList = ({ todos }) => {
    return todos
        .map((todo, index) => (<Todo todo={todo} />))
}

export default TodoList;

