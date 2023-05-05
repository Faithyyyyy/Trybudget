import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { data } from "../data";

const getBudgetList = () => {
  const budgetList = localStorage.getItem("budget");
  if (budgetList) {
    return JSON.parse(budgetList);
  }
  return [];
};
const initialState = {
  // budgetsList: data,
  budgetList: getBudgetList(),
  mainBudget: "",
  currentCategory: "",
  categoryID: "",
  isEditing: false,
  editID: null,
  TotalBudget: 680,
  currentBalance: 0,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setMainBudget: (state, action) => {
      state.mainBudget = action.payload;
    },
    setBudgetList: (state, action) => {
      state.budgetList = action.payload;
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    setcategoryID: (state, action) => {
      state.categoryID = action.payload;
    },
    removeBudgetItem: (state, action) => {
      state.budgetList = state.budgetList.filter(
        (item) => item.id !== action.payload
      );
    },
    clearBudgetlist: (state) => {
      state.budgetList = [];
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
  setBudgetList,
  setMainBudget,
  setCurrentCategory,
  setcategoryID,
  removeBudgetItem,
  clearBudgetlist,
  setIsEditing,
  setEditID,
} = budgetSlice.actions;
export default budgetSlice.reducer;
