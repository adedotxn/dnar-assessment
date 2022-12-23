import { configureStore } from '@reduxjs/toolkit'
import paramReducer from './features/paramSlice'
import sidebarReducer from './features/sidebarSlice'

export const store = configureStore({
  reducer: {
    param: paramReducer,
    sidebar: sidebarReducer
  },
})