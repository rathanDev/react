import { useState } from 'react';

import './App.css';
import Form from './components/form';
import TodoList from './components/todoList';

const App = () => {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (

    <div className="App">
      <header>
        <h1>Hello, toDOers</h1>
      </header>

      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
      />

    </div>

  );

}

export default App;
