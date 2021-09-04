import React, { useState, useEffect } from "react";
import { Task } from "./taskModel";

const NewTaskForm = ({ createTask }) => {
  const [showNew, setShowNew] = useState(false);

  const [taskId, setTaskId] = useState(1);
  const [taskDesc, setTaskDesc] = useState("");
  const currentDate = new Date().toISOString().substring(0, 10);
  const [taskDate, setTaskDate] = useState(currentDate);

  const onNewClick = (e) => {
    console.log(`show new ${showNew}`);
    setShowNew(!showNew);
  };

  const onTaskDescChange = (e) => {
    setTaskDesc(e.target.value);
  };

  const onTaskDateChange = (e) => {
    const date = e.target.value;
    setTaskDate(date);
  };

  const onCreateClick = () => {
    console.log(`onCreateClick ${taskDesc} ${taskDate}`);
    createTask(new Task(taskId, taskDesc, taskDate, "pending"));
    setTaskId(taskId + 1);
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
          <input
            type="text"
            onChange={onTaskDescChange}
            value={taskDesc}
          />
          <br />
          Date:
          <input
            type="text"
            onChange={onTaskDateChange}
            value={taskDate}
          />
          <br />
          <button onClick={onCreateClick}>Save</button>
        </div>
      )}
    </div>
  );
};

export default NewTaskForm;
