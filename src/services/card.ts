import { createAsyncThunk } from "@reduxjs/toolkit";
import userCardList from "../mockData/card";

export const fetchUserCardList = createAsyncThunk<any>('user/fetchUserList', () => {
  return new Promise<any>((res, rej) => {
    setTimeout(() => {
      debugger;
      return res(userCardList)
    }, 1000);
  })
})

