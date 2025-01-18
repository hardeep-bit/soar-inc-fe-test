import { createAsyncThunk } from "@reduxjs/toolkit";
import userMockData from "../mockData/user";

export const fetchTransferToList = createAsyncThunk<any>('user/fetchUserList', () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(userMockData)
    }, 1000);
  })
})

