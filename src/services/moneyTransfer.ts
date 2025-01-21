import { createAsyncThunk } from "@reduxjs/toolkit";
import tranferToList from "../mockData/moneyTransfer";

export const fetchTransferToList = createAsyncThunk<any, number>('moneyTransfer/fetchTransferToList', (limit = 3) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(tranferToList.slice(0, limit))
    }, 0);
  })
})

