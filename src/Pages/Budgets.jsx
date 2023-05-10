import Header from "../Components/Header";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlinePencil } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrFormCheckmark } from "react-icons/gr";
import { useState, useEffect } from "react";
import { data } from "../data.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setMainBudget,
  setBudgetList,
  setCurrentCategory,
  setBudgetData,
  setBudgetLabel,
  setcategoryID,
  removeBudgetItem,
  clearBudgetlist,
  setIsEditing,
  setEditID,
  calculateTotalBudget,
} from "../features/BudgetSlice";

function Budgets() {
  const {
    // budgetsList,
    isEditing,
    editID,
    mainBudget,
    budgetList,
    currentCategory,
    categoryID,
    budgetData,
    budgetLabel,
    totalBudgetAmount,
  } = useSelector((store) => {
    return store.budget;
  });
  const dispatch = useDispatch();
  // for the smooth transition
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  // for the smooth transition
  // Anytime you add to the budget list, update the saced state int he local storage, this is to retain the data gotten even after refresh
  useEffect(() => {
    dispatch(calculateTotalBudget());
    localStorage.setItem("budget", JSON.stringify(budgetList));
    localStorage.setItem("budgetData", JSON.stringify(budgetData));
    localStorage.setItem("budgetLabel", JSON.stringify(budgetLabel));
    localStorage.setItem(
      "totalBudgetAmount",
      JSON.stringify(totalBudgetAmount)
    );
  }, [budgetList]);
  const [selectedBox, setSelectedBox] = useState(0);
  const handleclick = (id) => {
    setSelectedBox(id);
  };

  // Add to the budget list when a budget is inputted
  const addToBudgetList = () => {
    const checkBudgetList = budgetList.find(
      (budList) => budList.id === selectedBox
    );
    const checkBudgetLabel = budgetLabel.includes(currentCategory);
    const checkBudgetItemId = budgetList.find(
      (budList) => budList.id === editID
    );
    if (!checkBudgetList) {
      dispatch(
        setBudgetList([
          ...budgetList,
          {
            id: categoryID,
            name: currentCategory,
            amount: mainBudget,
          },
        ])
      );
    }
    if (checkBudgetItemId && isEditing) {
      const set = budgetList.map((budget) => {
        if (budget.id === editID) {
          return { ...budget, amount: mainBudget };
        }
        return budget;
      });
      dispatch(setBudgetList(set));
    }
    if (!checkBudgetLabel) {
      dispatch(setBudgetLabel([...budgetLabel, currentCategory]));
    }
    dispatch(setBudgetData([...budgetData, mainBudget]));
    dispatch(setCurrentCategory(""));
    dispatch(setMainBudget(""));
    setSelectedBox(0);
  };
  // logic tp handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    addToBudgetList();
  };
  // logic for the disabled and active create button
  let disabled = false;
  if (
    (!currentCategory && !mainBudget) ||
    (!currentCategory && mainBudget) ||
    (currentCategory && !mainBudget) ||
    (currentCategory && Number(mainBudget) < 0)
  ) {
    disabled = true;
  } else {
    disabled = false;
  }
  // logic to deselect a selected category and its input if there's any
  const deselectCategory = () => {
    dispatch(setCurrentCategory(""));
    dispatch(setMainBudget(""));
    setSelectedBox(0);
  };

  return (
    <section className="bg-[#ffede9] min-h-screen font-poppins">
      <div className=" lg:ml-[320px] px-5">
        <Header />

        <h2 className="underline font-bold text-xl lg:text-2xl text-center mt-8 mb-5">
          Create Your Budgets
        </h2>
        <div className="bg-white p-6 md:p-10" data-aos="fade-out">
          <h3 className="text-[#6c7983] text-center mb-5">Choose a Category</h3>
          <div className="grided">
            {data.map((d) => {
              return (
                <div
                  onClick={() => {
                    handleclick(d.id);
                    dispatch(setCurrentCategory(d.role));
                    dispatch(setcategoryID(d.id));
                  }}
                  key={d.id}
                  className={`bg-[#ffede9]  border-2 transition-opacity opacity-100 ${
                    selectedBox === d.id ? "  border-[#ff7461]" : "border-white"
                  }  inline-block justify-center items-center py-3 lg:py-6 rounded relative cursor-pointer`}
                >
                  <div className="bg-[#f9e0d9] p-1 rounded-full self-center w-8 mx-auto mb-1">
                    <div className="text-[#ff7461] text-2xl"> {d.icon}</div>
                  </div>
                  <p className="font-light text-xs text-center">{d.role}</p>
                  {selectedBox === d.id && (
                    <div className="absolute w-4 h-4 bg-[#ff7461] flex place-content-center items-center rounded-full -right-2 -top-2">
                      <GrFormCheckmark />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="bg-white px-8 pt-8 pb-3 mt-8 relative"
        >
          <h3 className="text-black text-center mb-5">Enter Amount</h3>
          <div className="relative  w-[80%] max-w-[200px] mx-auto">
            <input
              className="border-b-4 bg-[#ffede9] text-[#6c7983] rounded border-[#ff7461] w-full py-2  flex justify-center outline-none pl-10 pr-5 text-center placeholder:text-[#6c7983] font-poppins font-light text-sm placeholder:text-xs"
              placeholder="Enter Budget"
              value={mainBudget}
              type="number"
              id="mainBudget"
              onChange={(e) => {
                dispatch(setMainBudget(Number(e.target.value)));
              }}
            />
            <span className="text-[#6c7983] font-light absolute top-2 left-5">
              $
            </span>
          </div>
          <div className="flex gap-7   -bottom-8 items-center justify-center relative">
            <div
              onClick={deselectCategory}
              className="w-9 flex cursor-pointer justify-center items-center h-9 rounded-full bg-[#7788f4]"
            >
              <HiOutlineXMark className="text-white text-[29px]" />
            </div>
            <button
              disabled={disabled}
              className={`bg-[#ff7461] disabled:bg-[#a7a7a7] uppercase px-5 py-2 text-white rounded-2xl text-sm font-light tracking-wider outline-none`}
            >
              create
            </button>
          </div>
        </form>
        <div className="mt-14 pb-24">
          <div className="flex justify-between">
            <h3 className="font-bold text-[#6c7983]">
              ({budgetList?.length}) Budgets
            </h3>
            {budgetList.length > 0 && (
              <button
                className="bg-gradient-to-tl from-indigo-300 to-red-400 text-black text-xs py-2 px-5 rounded-md"
                onClick={() => dispatch(clearBudgetlist())}
              >
                Clear All
              </button>
            )}
          </div>
          <div className=" md:grid gap-6 grid-cols-2">
            {budgetList?.map((budget) => {
              return (
                <div
                  key={budget.id}
                  className="bg-white flex my-3 md:mb-0 justify-between items-center py-2 px-3 rounded border-l-4 border-[#ff7461]"
                >
                  <div className="flex gap-3 items-center">
                    <div className="bg-[#f9e0d9] p-1 rounded-full self-center w-8 mx-auto mb-1">
                      <div className="text-[#ff7461] text-xl ">
                        {" "}
                        {data[budget.id - 1].icon}
                      </div>
                    </div>
                    <p className="font-light text-xs text-center">
                      {budget.name}
                    </p>
                  </div>
                  <p className="font-light text-xs text-center">
                    ${budget.amount}
                  </p>
                  <div className="flex gap-2">
                    <HiOutlinePencil
                      className="text-[#a7a7a7] cursor-pointer"
                      onClick={() => {
                        handleclick(budget.id);
                        dispatch(setMainBudget(budget.amount));
                        dispatch(setCurrentCategory(budget.name));
                        dispatch(setIsEditing(true));
                        dispatch(setEditID(budget.id));
                      }}
                    />
                    <RiDeleteBin5Line
                      className="text-[#ff7461] cursor-pointer"
                      onClick={() => dispatch(removeBudgetItem(budget.id))}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Budgets;
