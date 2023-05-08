import { createSlice } from "@reduxjs/toolkit";

const getBudgetList = () => {
  const budgetList = localStorage.getItem("budget");
  if (budgetList) {
    return JSON.parse(budgetList);
  }
  return [];
};
const getBudgetLabel = () => {
  const budgetLabel = localStorage.getItem("budgetLabel");
  if (budgetLabel) {
    return JSON.parse(budgetLabel);
  }
  return [];
};
const getBudgetData = () => {
  const budData = localStorage.getItem("budgetData");
  if (budData) {
    return JSON.parse(budData);
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
  totalBudgetAmount: getTotalAmount(),
  budgetList: getBudgetList(),
  budgetData: getBudgetData(),
  mainBudget: "",
  budgetLabel: getBudgetLabel(),
  currentCategory: "",
  categoryID: "",
  isEditing: false,
  editID: null,
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
    setBudgetData: (state, action) => {
      state.budgetData = action.payload;
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    setcategoryID: (state, action) => {
      state.categoryID = action.payload;
    },
    setBudgetLabel: (state, action) => {
      state.budgetLabel = action.payload;
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
    calculateTotalBudget: (state) => {
      let total = 0;
      state.budgetList.forEach((item) => {
        total += parseInt(item.amount);
      });
      state.totalBudgetAmount = total;
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
  calculateTotalBudget,
  setBudgetData,
  setBudgetLabel,
} = budgetSlice.actions;
export default budgetSlice.reducer;
