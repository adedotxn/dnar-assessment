import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const paramSlice = createSlice({
  name: 'urlParam',
  initialState,
  reducers: {
    configureRoute: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { configureRoute } = paramSlice.actions

export default paramSlice.reducer