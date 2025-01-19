import { fetchUserCardList } from "../../services/card";
import { createSlice as createReducer } from "@reduxjs/toolkit";

const cardReducer = createReducer({
  name: 'card',
  initialState: {
    cardList: []
  },
  reducers: {
    setCardList: (state, action) => {
      state.cardList = action.payload
    },
  },
  extraReducers: (builder => {
    builder.addCase(fetchUserCardList.fulfilled, (state, action) => {
      state.cardList = action.payload;
    })
  })
})

export const { setCardList } = cardReducer.actions

export default cardReducer.reducer
