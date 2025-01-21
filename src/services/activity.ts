import { createAsyncThunk } from "@reduxjs/toolkit";
import { weeklyActivityMockData } from "../mockData/activity";

export const fetchWeeklyActivity = createAsyncThunk<any>('activity/fetchWeeklyActivity', () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(weeklyActivityMockData)
    }, 0);
  })
})

