import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { data } from "../data";

const getExpenseList = () => {
  const expenseList = localStorage.getItem("expense");
  if (expenseList) {
    return JSON.parse(expenseList);
  }
  return [];
};
const getTotalAmount = () => {
  let amount = localStorage.getItem("totalBudgetAmount");
  if (amount) {
    return JSON.parse(amount);
  }
  return 0;
};

const initialState = {
  totalExpenseAmount: getTotalAmount(),
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
      state.currentExpense = action.payload;
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
    calculateTotalBudget: (state) => {
      let total = 0;
      state.expenseList.forEach((item) => {
        total += parseInt(item.amount);
      });
      state.totalExpenseAmount = total;
    },
  },
});

export const {
  setExpenseList,
  setMainExpense,
  setCurrentCategory,
  setcategoryID,
  removeExpenseItem,
  clearExpenselist,
  setIsEditing,
  setEditID,
  calculateTotalBudget,
} = expenseSlice.actions;
export default expenseSlice.reducer;
