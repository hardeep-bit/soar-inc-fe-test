import { createAsyncThunk } from "@reduxjs/toolkit";
import expensesData from "../mockData/expense";

export const fetchExpensesData = createAsyncThunk<any>('expense/fetchExpensesData', () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(expensesData)
    }, 0);
  })
})

