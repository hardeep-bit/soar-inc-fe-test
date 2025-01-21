import { fetchUserData } from "../../services/user";
import { createSlice as createReducer } from "@reduxjs/toolkit";

const userReducer = createReducer({
  name: 'user',
  initialState: {
    loginUser: null
  },
  reducers: {
    setUser: (state, action) => {
      state.loginUser = action.payload
    },
  },
  extraReducers: (builder => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loginUser = action.payload;
    })
  })
})

export const { setUser } = userReducer.actions

export default userReducer.reducer
