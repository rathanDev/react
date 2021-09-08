const taskList = [...tasks, new Task(desc, date)];

// filter , create new list
const newList = tasks.map((t) => {
  if (t.id === id) {
    t.status = t.status == "pending" ? "completed" : "pending";
  }
  return t;
});
setTasks(newList);
