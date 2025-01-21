import { fetchRecentTransactions } from "../../services/transaction";
import { createSlice as createReducer, PayloadAction } from "@reduxjs/toolkit";

interface ActionVia {
  id: string; // UUID for the entity performing the action
  name: string; // Name of the entity
}

interface ITransaction {
  id: string;
  action: 'credit' | 'debit';
  via: 'cash' | 'bank' | 'card' | 'soar';
  amount: string;
  currency: string;
  actionVia: ActionVia;
  date: string;
}

interface TransactionState {
  recentTransactions: ITransaction[];
}

const initialState: TransactionState = {
  recentTransactions: [],
};

const transactionReducer = createReducer({
  name: 'transaction',
  initialState,
  reducers: {
    setRecentTransactions: (state, action: PayloadAction<ITransaction[]>) => {
      state.recentTransactions = action.payload
    },
    addToRecentTransactions: (state, action: PayloadAction<ITransaction>) => {
      state.recentTransactions = [action.payload, ...state.recentTransactions]
    },
  },
  extraReducers: (builder => {
    builder.addCase(
      fetchRecentTransactions.fulfilled,
      (state, action: PayloadAction<ITransaction[]>) => {
        state.recentTransactions = action.payload;
      }
    );
  })
})

export const { setRecentTransactions, addToRecentTransactions } = transactionReducer.actions

export default transactionReducer.reducer
