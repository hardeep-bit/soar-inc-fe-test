import { createSlice as createReducer } from "@reduxjs/toolkit";

const cardReducer = createReducer({
  name: 'card',
  initialState: {
    cardList: []
  },
  reducers: {
    setCardList: (state, action) => {
      state.cardList = action.payload.cardList
    },
  },
  // extraReducers: (builder => {
  //   builder.addCase(fetchUserData.fulfilled, (state, action) => {
  //     state.user = action.payload;
  //   })
  // })
})

export const { setCardList } = cardReducer.actions

export default cardReducer.reducer
