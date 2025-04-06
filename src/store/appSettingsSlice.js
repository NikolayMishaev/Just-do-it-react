import { createSlice } from '@reduxjs/toolkit'

export const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState: {
    theme: '',
    page: 0,
    countTasksOnPage: 0,
    id: 0,
  },
  reducers: {
    setPageStore: (state, action) => { 
      state.page = action.payload
    },
    setIdStore: (state, action) => { 
      state.id = action.payload
    },
    changeThemeStore: (state, action) => { 
      state.theme = action.payload
    },
    setCountPageStore: (state, action) => { 
      state.countTasksOnPage = action.payload
    }
  },
})

export const { setPageStore, setIdStore, changeThemeStore, setCountPageStore  } = appSettingsSlice.actions

export default appSettingsSlice.reducer