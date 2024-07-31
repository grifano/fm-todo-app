import axios from "axios";

axios.defaults.baseURL = "https://66a8ec12e40d3aa6ff59f43d.mockapi.io/todo/";

export async function fetchTasks() {
  const response = await axios.get("/tasks");
  return response.data;
}
export async function addTask(newTask) {
  const response = await axios.post("/tasks", newTask);
  return response.data;
}
export async function removeTask(taskId) {
  const response = await axios.post(`/tasks:${taskId}`);
  return response.data;
}
