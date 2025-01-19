import { fetchTransferToList } from "../../services/moneyTransfer";
import { createSlice as createReducer } from "@reduxjs/toolkit";

const moneyTransferReducer = createReducer({
  name: 'moneyTransfer',
  initialState: {
    tranferToList: []
  },
  reducers: {
    tranferToList: (state, action) => {
      state.tranferToList = action.payload
    },
  },
  extraReducers: (builder => {
    builder.addCase(fetchTransferToList.fulfilled, (state, action) => {
      state.tranferToList = action.payload;
    })
  })
})

export const { tranferToList } = moneyTransferReducer.actions

export default moneyTransferReducer.reducer
