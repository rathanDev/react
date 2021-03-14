import { useState } from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {

  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if (!todo.text)
      return
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    console.log(todo, ...todos)
  }

  return (
    <div className="App">
      <h1>What's the plan today?</h1>
      <TodoForm
        onSubmit={addTodo}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
