import { createSlice as createReducer } from "@reduxjs/toolkit";

const appReducer = createReducer({
  name: 'app',
  initialState: {
    width: 0,
    height: 0,
    isNavBarOpen: false
  },
  reducers: {
    setAppHeight: (state, action) => {
      state.height = action.payload
    },
    setAppWidth: (state, action) => {
      state.width = action.payload
    },
    setIsNavBarOpen: (state, action) => {
      state.isNavBarOpen = action.payload
    },
  },
})

export const { setAppHeight, setAppWidth, setIsNavBarOpen } = appReducer.actions

export default appReducer.reducer
