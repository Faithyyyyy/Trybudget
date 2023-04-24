import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./features/BudgetSlice";

export const store = configureStore({
  reducer: {
    budget: budgetReducer,
  },
});
console.log({ budgetReducer });
