import { fetchUserData } from "../../services/user";
import { createSlice as createReducer } from "@reduxjs/toolkit";

const userReducer = createReducer({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: (builder => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.user = action.payload; 
    })
  })
})

export const { setUser } = userReducer.actions

export default userReducer.reducer
