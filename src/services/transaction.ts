import { createAsyncThunk } from "@reduxjs/toolkit";
import recentTransactionMockList from "../mockData/transaction";

export const fetchRecentTransactions = createAsyncThunk<any, number>('transaction/fetchRecentTransactions', (limit = 3) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(recentTransactionMockList.slice(0, limit))
    }, 1000);
  })
})

