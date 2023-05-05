import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./features/BudgetSlice";
import expenseReducer from "./features/BudgetSlice";

export const store = configureStore({
  reducer: {
    budget: budgetReducer,
    expense: expenseReducer,
  },
});
