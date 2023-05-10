import Header from "../Components/Header";
import { data } from "../data.jsx";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlinePencil } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrFormCheckmark } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setMainExpense,
  setExpenseList,
  setCurrentCategory,
  setcategoryID,
  removeExpenseItem,
  clearExpenselist,
  setIsEditing,
  setEditID,
  calculateTotalBudget,
} from "../features/ExpenseSlice";

function Expense() {
  const customId = "custom-id-yes";
  const {
    expenseList,
    currentExpense,
    categoryID,
    isEditing,
    editID,
    mainExpense,
  } = useSelector((store) => {
    return store.expense;
  });
  const { budgetList } = useSelector((store) => {
    return store.budget;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedBox, setSelectedBox] = useState(0);
  const handleclick = (id) => {
    setSelectedBox(id);
  };

  // Anytime you add to the expense list, update the saved state in the local storage, this is to retain the data gotten even after refresh
  useEffect(() => {
    if (expenseList) {
      dispatch(calculateTotalBudget());
      localStorage.setItem("expense", JSON.stringify(expenseList));
    }
  }, [expenseList]);

  // Add to the expense list when a budget is inputted
  const addToExpenseList = () => {
    const checkExpenseList = expenseList.find(
      (expList) => expList.id === selectedBox
    );
    const checkExpenseItemId = expenseList.find(
      (expList) => expList.id === editID
    );
    if (!checkExpenseList) {
      dispatch(
        setExpenseList([
          ...expenseList,
          {
            id: categoryID,
            name: currentExpense,
            amount: mainExpense,
          },
        ])
      );
    }
    if (checkExpenseItemId && isEditing) {
      const set = expenseList.map((expense) => {
        if (expense.id === editID) {
          return { ...expense, amount: mainExpense };
        }
        return expense;
      });
      dispatch(setExpenseList(set));
    }
    dispatch(setCurrentCategory(""));
    dispatch(setMainExpense(""));
    setSelectedBox(0);
  };

  // logic to handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    addToExpenseList();
  };
  // logic for the disabled and active create button
  let disabled = false;
  if (
    (!currentExpense && !mainExpense) ||
    (!currentExpense && mainExpense) ||
    (currentExpense && !mainExpense) ||
    (currentExpense && Number(mainExpense) < 0)
  ) {
    disabled = true;
  } else {
    disabled = false;
  }
  // logic to deselect a selected category and its input if there's any
  const deselectCategory = () => {
    dispatch(setCurrentCategory(""));
    dispatch(setMainExpense(""));
    setSelectedBox(0);
    disabled = true;
  };
  // logic to check if a selected expense has been budgetted for
  const checkSelectedExpense = (id, info) => {
    const checkers = budgetList.find((budlist) => id === budlist.id);
    if (!checkers) {
      return (
        // dispatch(setCurrentCategory("")),
        toast.warning(
          <p>
            Create a budget for <span className="text-[#ff7461]">{info}</span>{" "}
            first
          </p>,
          {
            toastId: customId,
            icon: ({ theme, type }) => (
              <GiCancel className="text-[#ff7461] text-lg" />
            ),
          }
        ),
        // handleclick(0),
        (disabled = true)
      );
    } else {
      handleclick(id);
      dispatch(setCurrentCategory(info));
      dispatch(setcategoryID(id));
    }
  };
  console.log(expenseList);
  return (
    <section className="bg-[#7788f479] min-h-screen font-poppins">
      <div className=" lg:ml-[320px] px-5" data-aos="fade-out">
        <Header />

        <h2 className="underline font-bold text-xl lg:text-2xl text-center mt-8 mb-5">
          Create Your Expenses
        </h2>
        <div className="bg-white p-12">
          <h3 className="text-[#6c7983] text-center mb-5">Choose a Category</h3>
          <div className="grided">
            {data.map((d) => {
              return (
                <div
                  onClick={() => {
                    checkSelectedExpense(d.id, d.role);
                  }}
                  key={d.id}
                  className={`bg-[#7788f479] border-2 transition-opacity opacity-100 cursor-pointer ${
                    selectedBox === d.id ? " border-[#7788f4]" : "border-white"
                  } inline-block justify-center items-center py-3 lg:py-6 rounded relative`}
                >
                  <div className="bg-[#7788f4] p-1 rounded-full self-center w-8 mx-auto mb-1">
                    <div className="text-white text-2xl"> {d.icon}</div>
                  </div>
                  <p className="font-light text-xs text-center">{d.role}</p>
                  {selectedBox === d.id && (
                    <div className="absolute w-4 h-4 bg-[#7788f4] flex place-content-center items-center rounded-full -right-2 -top-2">
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
              className="border-b-4 bg-[#7788f479] text-[#6c7983] rounded border-[#7788f4] w-full py-2  flex justify-center outline-none pl-10 pr-5 text-center placeholder:text-[#6c7983] font-poppins font-light text-sm placeholder:text-xs"
              placeholder="Enter Budget"
              value={mainExpense}
              type="number"
              id="mainExpense"
              onChange={(e) => {
                dispatch(setMainExpense(Number(e.target.value)));
              }}
            />
            <span className="text-[#6c7983] font-light absolute top-2 left-5">
              $
            </span>
          </div>
          <div className="flex gap-7   -bottom-8 items-center justify-center relative">
            <div
              onClick={deselectCategory}
              className="w-9 flex cursor-pointer justify-center items-center h-9 rounded-full bg-[#ff7461]"
            >
              <HiOutlineXMark className="text-white text-[29px]" />
            </div>
            <button
              disabled={disabled}
              className=" bg-[#7788f4] disabled:bg-[#a7a7a7] uppercase px-5 py-2 text-white rounded-2xl text-sm font-light tracking-wider"
            >
              create
            </button>
          </div>
        </form>
        <div className="mt-14 pb-24">
          <div className="flex justify-between">
            <h3 className="font-bold text-[#6c7983]">
              ({expenseList?.length}) Budgets
            </h3>
            {expenseList?.length > 0 && (
              <button
                className="bg-gradient-to-tl from-indigo-300 to-red-400 text-black text-xs py-2 px-5 rounded-md"
                onClick={() => dispatch(clearExpenselist())}
              >
                Clear All
              </button>
            )}
          </div>
          <div className="my-3  md:grid gap-6 grid-cols-2">
            {expenseList?.map((expense) => {
              return (
                <div
                  key={expense.id}
                  className="bg-white flex my-3 md:mb-0 justify-between items-center py-2 px-3 rounded border-l-4 border-[#7788f4]"
                >
                  <div className="flex gap-3 items-center">
                    <div className="bg-[#c3c9f4]  flex justify-center items-center rounded-full self-center w-6 h-6 mx-auto mb-1">
                      <div className="text-[#7788f4] text-lg ">
                        {" "}
                        {data[expense.id - 1].icon}
                      </div>
                    </div>
                    <p className="font-light text-xs text-center">
                      {expense.name}
                    </p>
                  </div>
                  <p className="font-light text-xs text-center">
                    ${expense.amount}
                  </p>
                  <div className="flex gap-2">
                    <HiOutlinePencil
                      className="text-[#a7a7a7] cursor-pointer"
                      onClick={() => {
                        handleclick(expense.id);
                        dispatch(setMainExpense(expense.amount));
                        dispatch(setCurrentCategory(expense.name));
                        dispatch(setIsEditing(true));
                        dispatch(setEditID(expense.id));
                      }}
                    />
                    <RiDeleteBin5Line
                      className="text-[#7788f4] cursor-pointer"
                      onClick={() => dispatch(removeExpenseItem(expense.id))}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        closeButton={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="w-[70%] m-6 md:w-[1400px] flex"
        bodyClassName={() =>
          "text-xs gap-0 font-poppins flex items-center justify-center"
        }
      />
    </section>
  );
}

export default Expense;
