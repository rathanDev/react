import React, { useState, useEffect } from "react";
import NewTaskForm from "./components/newTaskForm";
import { retrieveAllTasks, saveTask, updateTask } from "./util/httpService";
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
    console.log(`update status ${id}`);
    const task = tasks.filter((t) => t.id === id);
    updateTask(id, task.taskDesc, task.taskDate, "COMPLETED", setTasks);
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
      <div className="card" key={t.id}>
        <div className="container">
          <p className="task-desc">
            <b>{t.taskDesc}</b>{" "}
          </p>
          <div className="date-status">
            <div className="task-date"> {formatDate(t.taskDate)} </div>
            <div>
              <input
                className="task-status"
                type="checkbox"
                defaultChecked={t.taskStatus === "COMPLETED"}
                onChange={() => onStatusCheckboxChange(t.id)}
              />
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Tasker</h1>

      <div className="outer-card">
        <div className="outer-container">
          <NewTaskForm createTask={createTask}></NewTaskForm>
          <br />

          {tasks.length > 0 ? (
            <div>
              {renderTasks()}
              {/* <div>List of tasks:</div> */}
            </div>
          ) : (
            <div>No Tasks</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
