import { createAsyncThunk } from "@reduxjs/toolkit";
import userCardList from "../mockData/card";

export const fetchUserCardList = createAsyncThunk<any, number>('card/fetchUserCardList', (limit: number = 2) => {
  return new Promise<any>((res, rej) => {
    setTimeout(() => {
      return res(userCardList.slice(0, limit))
    }, 0);
  })
})

