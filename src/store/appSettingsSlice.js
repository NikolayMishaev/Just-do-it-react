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
    incrementPageStore: (state) => { 
      state.page += 1 
    },
    decrementPageStore: (state) => { 
      state.page -= 1 
    },
    setPageStore: (state, action) => { 
      state.page = action.payload
    },
    incrementIdStore: (state) => { 
      state.id += 1 
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

export const { incrementPageStore, decrementPageStore, setPageStore, setCountPageStore, incrementIdStore, changeThemeStore, setIdStore } = appSettingsSlice.actions

export default appSettingsSlice.reducer