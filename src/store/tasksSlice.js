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
    }
  },
})

export const { addTaskStore, deleteTaskStore } = tasksSlice.actions

export default tasksSlice.reducer