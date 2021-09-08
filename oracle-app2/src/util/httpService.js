import axios from "axios";

const BASE_URL = `http://localhost:8080`;

export const retrieveAllTasks = (setTasks) => {
  // console.log(`Retrieve all tasks ${tasks}`);
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

export const saveTask = (desc, date, setTasks) => {
  axios
    .post(`${BASE_URL}/task`, {
      taskDesc: desc,
      taskDate: date,
    })
    .then((res) => {
      console.log(`Successfully saved task ${res}`);
      retrieveAllTasks(setTasks);
    })
    .catch((err) => {
      console.error(`Err at saving task ${err}`);
    });
};

export const updateTask = (taskId, desc, date, status, setTasks) => {
    axios
      .post(`${BASE_URL}/task/${taskId}`, {
        taskDesc: desc,
        taskDate: date,
        taskStatus: status
      })
      .then((res) => {
        console.log(`Successfully saved task ${res}`);
        // const taskList = [...tasks, new Task(desc, date)];
        retrieveAllTasks(setTasks);
      })
      .catch((err) => {
        console.error(`Err at saving task ${err}`);
      });
  };
