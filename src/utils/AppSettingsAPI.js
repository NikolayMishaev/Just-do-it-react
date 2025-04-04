import { API } from "./constants";

const checkStatus = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status} ${res.statusText}`);
};

export const getAppSettings = async () => {
  try {
    const response = await fetch(`${API.baseURL}/settings`, {
      method: "GET",
      headers: API.headers,
    });
    return checkStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateAppSettings = async (field) => {
  try {
    const response = await fetch(`${API.baseURL}/settings/123`, {
      method: "PATCH",
      headers: API.headers,
      body: JSON.stringify(field),
    });
    return checkStatus(response);
  } catch (err) {
    return Promise.reject(err);
  }
};
