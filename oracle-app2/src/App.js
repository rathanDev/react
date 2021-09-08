import React, { useState, useEffect } from "react";
import NewTaskForm from "./components/newTaskForm";
import axios from "axios";
import "./App.css";
import { Task } from "./components/taskModel";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const BASE_URL = `http://localhost:8080`;

  useEffect(() => {
    console.log(`UseEffect`);
    retrieveAllTasks();
  }, []);

  const retrieveAllTasks = () => {
    console.log(`Retrieve all tasks ${tasks}`);
    axios
      .get(`${BASE_URL}/task`)
      .then((res) => {
        const taskList = res.data;
        console.log(`Retrieve ${taskList}`);
        setTasks(taskList);
      })
      .catch((err) => {
        console.error(`Err ${err}`);
      });
  };

  const saveTask = (desc, date) => {
    axios
      .post(`${BASE_URL}/task`, {
        taskDesc: desc,
        taskDate: date,
      })
      .then((res) => {
        console.log(`Successfully saved task ${res}`);
        retrieveAllTasks();
      })
      .catch((err) => {
        console.error(`Err at saving task ${err}`);
      });
  };

  const createTask = (desc, date) => {
    // console.log(`Create task ${task}`);
    saveTask(desc, date);
    const taskList = [...tasks, new Task(desc, date)];
    // setTasks(taskList);
    // console.log(taskList);
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
