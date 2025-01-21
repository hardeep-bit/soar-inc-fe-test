import { fetchExpensesData } from "../..//services/expense";
import { createSlice as createReducer } from "@reduxjs/toolkit";

const expenseReducer = createReducer({
  name: 'expense',
  initialState: {
    expensesData: null
  },
  reducers: {
    setExpensesData: (state, action) => {
      state.expensesData = action.payload.cardList
    },
  },
  extraReducers: (builder => {
    builder.addCase(fetchExpensesData.fulfilled, (state, action) => {
      state.expensesData = action.payload;
    })
  })
})

export const { setExpensesData } = expenseReducer.actions

export default expenseReducer.reducer
