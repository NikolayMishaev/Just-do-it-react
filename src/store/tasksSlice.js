import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: []
  },
  reducers: {
    addTaskStore: (state, action) => { 
      state.tasks.push(action.payload) 
    },
    deleteTaskStore: (state, action) => { 
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    updateTaskStore: (state, action) => { 
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload.id) return {...task, ...action.payload}
        else return task
      })
    }
  },
})

export const { addTaskStore, deleteTaskStore, updateTaskStore } = tasksSlice.actions

export default tasksSlice.reducer