import React, { useState, useEffect } from "react";

const Form = ({ createTask }) => {
  const [showNew, setShowNew] = useState(false);
  const [newTask, setNewTask] = useState("");

  const onNewClick = (e) => {
    console.log(`show new ${showNew}`);
    setShowNew(!showNew);
  };

  const onInputChange = (e) => {
    const text = e.target.value;
    console.log(text);
    setNewTask(text);
  };

  const onCreateClick = () => {
      console.log(`onCreateClick ${newTask}`);
      createTask(newTask);
  }

  return (
    <div>
      {!showNew ? (
        <button onClick={onNewClick}>New</button>
      ) : (
        <button onClick={onNewClick}>-</button>
      )}

      {showNew && (
        <div>
          Create New Todo
          <input type="text" onChange={onInputChange} value={newTask} />
          <button onClick={onCreateClick}>Create</button>
        </div>
      )}
    </div>
  );
};

export default Form;
