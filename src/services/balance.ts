import { createAsyncThunk } from "@reduxjs/toolkit";
import balanceHistory from "../mockData/balance";

export const fetchbalanceHistoryData = createAsyncThunk<any>('balance/fetchbalanceHistoryData', () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(balanceHistory)
    }, 0);
  })
})

