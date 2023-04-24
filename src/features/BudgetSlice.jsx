import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const initialState = {
  budgetsList: data,
  newBudgetList: [],
  TotalBudget: 680,
  currentBalance: 0,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addToBudgetList(state, action) {
      state.newBudgetList.push(action.payload);
    },
  },
});
export const { addToBudgetList } = budgetSlice.actions;
export default budgetSlice.reducer;
