import { createSlice } from '@reduxjs/toolkit'

export const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState: {
    theme: 'grey',
    page: 0,
    countTasksOnPage: 10,
    id: 1,
  },
  reducers: {
    incrementPage: (state) => { 
      state.page += 1 
    },
    decrementPage: (state) => { 
      state.page -= 1 
    },
    incrementId: (state) => { 
      state.id += 1 
    },
    changeTheme: (state, action) => { 
      state.theme = action.payload
    }
  },
})

export const { incrementPage, decrementPage, incrementId, changeTheme } = appSettingsSlice.actions

export default appSettingsSlice.reducer