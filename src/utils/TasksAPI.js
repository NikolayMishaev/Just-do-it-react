import { API } from "./constants";

const checkStatus = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status} ${res.statusText}`);
};

export const getTasksServer = async () => {
  try {
    const response = await fetch(`${API.baseURL}/tasks`, {
      method: "GET",
      headers: API.headers,
    });
    return checkStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const addTaskServer = async (task) => {
  try {
    const response = await fetch(`${API.baseURL}/tasks`, {
      method: "POST",
      headers: API.headers,
      body: JSON.stringify(task),
    });
    return checkStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTaskServer = async (taskID) => {
    try {
      const response = await fetch(`${API.baseURL}/tasks/${taskID}`, {
        method: "DELETE",
        headers: API.headers,
      });
      return checkStatus(response);
    } catch (err) {
      return Promise.reject(err);
    }
};

export const updateTaskServer = async (taskID, field) => {
    try {
      const response = await fetch(`${API.baseURL}/tasks/${taskID}`, {
        method: "PATCH",
        headers: API.headers,
        body: JSON.stringify(field)
      });
      return checkStatus(response);
    } catch (err) {
      return Promise.reject(err);
    }
};