import React, { useState, useEffect } from "react";
import { Task } from "./taskModel";

const Form = ({ createTask }) => {
  const [showNew, setShowNew] = useState(false);

  const [taskDesc, setTaskDesc] = useState("");
  const [taskDate, setTaskDate] = useState(new Date().toISOString().substring(0, 10));

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
    createTask(new Task(taskDesc, taskDate));
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
          Create a New Task <br />
          <input type="text" onChange={onTaskDescChange} value={taskDesc} /> <br />
          <input type="text" onChange={onTaskDateChange} value={taskDate} /> <br />
          <button onClick={onCreateClick}>Create</button>
        </div>
      )}
    </div>
  );
};

export default Form;
