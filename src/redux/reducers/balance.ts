import { fetchbalanceHistoryData } from "../../services/balance";
import { createSlice as createReducer } from "@reduxjs/toolkit";

const balanceReducer = createReducer({
  name: 'balance',
  initialState: {
    balanceHistory: []
  },
  reducers: {
    setBalanceHistory: (state, action) => {
      state.balanceHistory = action.payload
    },
  },
  extraReducers: (builder => {
    builder.addCase(fetchbalanceHistoryData.fulfilled, (state, action) => {
      state.balanceHistory = action.payload;
    })
  })
})

export const { setBalanceHistory } = balanceReducer.actions

export default balanceReducer.reducer
