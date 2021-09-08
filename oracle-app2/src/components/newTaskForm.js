import React, { useState, useEffect } from "react";
import { Task } from "./taskModel";
import "./newTaskForm.css";

const NewTaskForm = ({ createTask }) => {
  const [showNew, setShowNew] = useState(false);

  const [taskDesc, setTaskDesc] = useState("");
  const currentDate = new Date().toISOString().substring(0, 10);
  const [taskDate, setTaskDate] = useState(currentDate);

  const onNewClick = (e) => {
    setShowNew(!showNew);
  };

  const onTaskDescChange = (e) => {
    const desc = e.target.value;
    setTaskDesc(desc);
  };

  const onTaskDateChange = (e) => {
    const date = e.target.value;
    setTaskDate(date);
  };

  const onCreateClick = () => {
    createTask(taskDesc, taskDate);
  };

  return (
    <div>
      {!showNew ? (
        <button className="new-button" onClick={onNewClick}>
          New
        </button>
      ) : (
        <button className="new-button" onClick={onNewClick}>
          -
        </button>
      )}

      {showNew && (
        <div className="new-card">
          <div className="new-container">
            <h2>
              <b>Add task</b>
            </h2>
            <p>
              <label htmlFor="desc">Description</label>
              <input
                type="text"
                id="desc"
                name="desc"
                onChange={onTaskDescChange}
                value={taskDesc}
              />
            </p>
            <p>
              <label htmlFor="date">Date</label>
              <input
                type="text"
                id="date"
                name="date"
                onChange={onTaskDateChange}
                value={taskDate}
              />
            </p>
            <button className="save-button" onClick={onCreateClick}>
              Save
            </button>
            <br />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewTaskForm;
