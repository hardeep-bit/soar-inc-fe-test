import { createAsyncThunk } from "@reduxjs/toolkit";
import userMockData from "../mockData/user";

export const fetchUserData = createAsyncThunk<any>('user/fetchUserData', () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(userMockData)
    }, 0);
  })
})

