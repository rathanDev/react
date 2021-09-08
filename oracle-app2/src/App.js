import React, { useState, useEffect } from "react";
import NewTaskForm from "./components/newTaskForm";
import { retrieveAllTasks, saveTask } from "./util/httpService";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(`UseEffect----------------------------------------`);
    retrieveAllTasks(setTasks);
  }, []);

  const createTask = (desc, date) => {
    saveTask(desc, date, setTasks);
  };

  const onStatusCheckboxChange = (id) => {
    console.log(id);
    const newList = tasks.map((t) => {
      if (t.id === id) {
        t.status = t.status == "pending" ? "completed" : "pending";
      }
      return t;
    });
    console.log(newList);
    setTasks(newList);
  };

  const formatDate = (epoch) => {
    const date = new Date(epoch);
    const y = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    const m = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(date);
    const d = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    return `${y}-${m}-${d}`;
  };

  const renderTasks = () => {
    // console.log(`render ${tasks}`);
    return tasks.map((t) => (
      <div key={t.id}>
        <div>id: {t.id}</div>
        <div>desc: {t.taskDesc}</div>
        <div>date: {formatDate(t.taskDate)}</div>
        <div>status: {t.taskStatus}</div>
        <input
          type="checkbox"
          defaultChecked={t.taskStatus !== "PENDING"}
          onChange={() => onStatusCheckboxChange(t.id)}
        />
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
