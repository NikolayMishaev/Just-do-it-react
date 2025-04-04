import { API } from "./constants";

export const getTasks = async() => {
    try {
      const response = await fetch(`${API.baseURL}/tasks`, {
          method: 'GET',
          headers: API.headers
      })
      return response.json()
  } catch (err) {
      return Promise.reject(err.message)
  }
}

export const postTask = async(task) => {
  try {
    const response = await fetch(`${API.baseURL}/tasks`, {
        method: 'POST',
        headers: API.headers,
        body: JSON.stringify(task)
    })
    return response.json()
} catch (err) {
    console.log(err)
}
}