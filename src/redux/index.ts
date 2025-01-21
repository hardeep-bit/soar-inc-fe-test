import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import cardsReducer from "./reducers/card";
import transactionsReducer from "./reducers/transaction";
import activityReducer from "./reducers/activity";
import expensesReducer from "./reducers/expense";
import balancesReducer from "./reducers/balance";
import moneyTranserReducer from "./reducers/moneyTransfer";
import appReducer from "./reducers/app";

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    card: cardsReducer,
    transaction: transactionsReducer,
    activity: activityReducer,
    expense: expensesReducer,
    balance: balancesReducer,
    moneyTransfer: moneyTranserReducer
  },
  // middleware: (presetMiddleware => {
  //   return presetMiddleware()
  // })
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;