import { fetchWeeklyActivity } from "../../services/activity";
import { createSlice as createReducer } from "@reduxjs/toolkit";

const activityReducer = createReducer({
  name: 'activity',
  initialState: {
    weeklyActivity: null
  },
  reducers: {
    setWeeklyActivity: (state, action) => {
      state.weeklyActivity = action.payload
    },
  },
  extraReducers: (builder => {
    builder.addCase(fetchWeeklyActivity.fulfilled, (state, action) => {
      state.weeklyActivity = action.payload;
    })
  })
})

export const { setWeeklyActivity } = activityReducer.actions

export default activityReducer.reducer
