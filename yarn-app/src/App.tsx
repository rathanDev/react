import './App.css';
import * as React from 'react'

type ITodo = {
  id: number;
  title: string;
  completed: boolean;
}

type ITodos = {
  todos: ITodo[]
}

function App() {
  return (
      <div>
        <button onClick={e => console.log()}>The button</button>
      </div>
  );
}

export default App;
