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
    setPage: (state, action) => { 
      state.page = action.payload
    },
    incrementId: (state) => { 
      state.id += 1 
    },
    setId: (state, action) => { 
      state.id = action.payload
    },
    changeTheme: (state, action) => { 
      state.theme = action.payload
    },
    setCountPage: (state, action) => { 
      state.countTasksOnPage = action.payload
    }
  },
})

export const { incrementPage, decrementPage, setPage, setCountPage, incrementId, changeTheme, setId } = appSettingsSlice.actions

export default appSettingsSlice.reducer