import React, { useState, useEffect } from "react";
import { Task } from "./taskModel";

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
        <button onClick={onNewClick}>New</button>
      ) : (
        <button onClick={onNewClick}>-</button>
      )}

      {showNew && (
        <div>
          Add Task <br />
          Description:
          <input type="text" onChange={onTaskDescChange} value={taskDesc} />
          <br />
          Date:
          <input type="text" onChange={onTaskDateChange} value={taskDate} />
          <br />
          <button onClick={onCreateClick}>Save</button>
        </div>
      )}
    </div>
  );
};

export default NewTaskForm;
