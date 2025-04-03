import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: []
  },
  reducers: {
    addTask: (state, action) => { 
      state.tasks.push(action.payload) 
    },
  },
})

export const { addTask } = tasksSlice.actions

export default tasksSlice.reducer