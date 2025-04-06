import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './tasksSlice'
import appSettingsSlice from './appSettingsSlice'

export default configureStore({
  reducer: {
    tasks: tasksSlice,
    appSettings: appSettingsSlice
  },
})