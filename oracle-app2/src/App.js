import React, { useState, useEffect } from "react";
import Form from "./components/form";
import "./App.css";

const App = ({ createTodo }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    console.log(`In App component ${task}`);
    const taskList = [...tasks, task];
    setTasks(taskList);
    console.log(taskList);
  };

  return (
    <div className="App">
      <h3>Task Manager</h3>

      <Form createTask={createTask}></Form>
    </div>
  );
};

export default App;
