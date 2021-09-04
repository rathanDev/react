import React, { useState, useEffect } from "react";
import NewTaskForm from "./components/newTaskForm";
import "./App.css";

const App = ({ createTodo }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    const taskList = [...tasks, task];
    setTasks(taskList);
    console.log(taskList);
  };

  const renderTasks = () => {
    console.log(`render ${tasks}`);
    return tasks.map((t) => (
      <div>
        <div>{t.desc}</div>
        <div>{t.date}</div>
        <div>{t.status}</div>
        <br />
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Tasker</h1>
      <NewTaskForm createTask={createTask}></NewTaskForm>
      <br />
      {tasks.length > 0 ? (
        <div>
          <div>List of tasks:</div>
          {renderTasks()}
        </div>
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
};

export default App;
