import axios from "axios";

const BASE_URL = `http://localhost:8080`;

export const retrieveAllTasks = (setTasks) => {
  axios
    .get(`${BASE_URL}/task`)
    .then((res) => {
      const taskList = res.data;
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
      taskStatus: status,
    })
    .then((res) => {
      // const taskList = [...tasks, new Task(desc, date)];
      retrieveAllTasks(setTasks);
    })
    .catch((err) => {
      console.error(`Err at saving task ${err}`);
    });
};
