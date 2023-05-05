import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { data } from "../data";

const getExpenseList = () => {
  const expenseList = localStorage.getItem("budget");
  if (expenseList) {
    return JSON.parse(expenseList);
  }
  return [];
};
const initialState = {
  // budgetsList: data,
  expenseList: getExpenseList(),
  mainExpense: "",
  currentExpense: "",
  categoryID: "",
  isEditing: false,
  editID: null,
  TotalExpense: 680,
  currentBalance: 0,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setMainExpense: (state, action) => {
      state.mainExpense = action.payload;
    },
    setExpenseList: (state, action) => {
      state.expenseList = action.payload;
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    setcategoryID: (state, action) => {
      state.categoryID = action.payload;
    },
    removeExpenseItem: (state, action) => {
      state.expenseList = state.expenseList.filter(
        (item) => item.id !== action.payload
      );
    },
    clearExpenselist: (state) => {
      state.expenseList = [];
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
    setEditID: (state, action) => {
      state.editID = action.payload;
    },
  },
});
export const {
  setExpenseList,
  setMainExpense,
  setCurrentCategory,
  setcategoryID,
  removeBudgetItem,
  clearBudgetlist,
  setIsEditing,
  setEditID,
} = expenseSlice.actions;
export default expenseSlice.reducer;
