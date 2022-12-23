import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    sidebarMutate: (state) => {
      state.value = !state.value
    },
  },
})
export const { sidebarMutate } = sidebarSlice.actions

export default sidebarSlice.reducer