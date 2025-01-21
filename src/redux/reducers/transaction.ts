import { fetchRecentTransactions } from "../../services/transaction";
import { createSlice as createReducer } from "@reduxjs/toolkit";

const transactionReducer = createReducer({
  name: 'transaction',
  initialState: {
    recentTransactions: []
  },
  reducers: {
    setRecentTransactions: (state, action) => {
      state.recentTransactions = action.payload
    },
  },
  extraReducers: (builder => {
    builder.addCase(fetchRecentTransactions.fulfilled, (state, action) => {
      state.recentTransactions = action.payload;
    })
  })
})

export const { setRecentTransactions } = transactionReducer.actions

export default transactionReducer.reducer
