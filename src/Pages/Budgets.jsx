import Header from "../Components/Header";
import { HiOutlineXMark } from "react-icons/hi2";
import { GrFormCheckmark } from "react-icons/gr";
import { useState, useEffect, useCallback } from "react";
import { data } from "../data.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

function Budgets() {
  const { budgetsList, newBudgetList } = useSelector((store) => store.budget);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [selectedBox, setSelectedBox] = useState(0);
  const handleclick = (id) => {
    setSelectedBox(id);
  };

  const handleAddToBudget = () => {
    console.log("mddhjhjdshjsjhjds");
  };

  const [numValue, setNumValue] = useState("");
  const [val, setVal] = useState(0);

  const changeValue = (e) => {
    const re = /^[0-9\b]+$/;
    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setNumValue(e.target.value);
      setVal(parseInt(e.currentTarget.value, 10) || 0);
      console.log();
    }
  };

  const handleBlur = useCallback(
    (e) => {
      setNumValue(val.toString());
    },
    [val]
  );
  return (
    <section className="bg-[#ffede9] font-poppins">
      <div className=" lg:ml-[320px] px-5">
        <Header />

        <h2 className="underline font-bold text-xl lg:text-2xl text-center mt-8 mb-5">
          Create Your Budgets
        </h2>
        <div className="bg-white p-6 md:p-10" data-aos="fade-out">
          <h3 className="text-[#6c7983] text-center mb-5">Choose a Category</h3>
          <div className="grided">
            {budgetsList.map((d) => {
              return (
                <div
                  onClick={() => handleclick(d.id)}
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
        <div className="bg-white px-8 pt-8 pb-3 mt-8 relative">
          <h3 className="text-black text-center mb-5">Enter Amount</h3>
          <div className="relative  w-[80%] max-w-[200px] mx-auto">
            <p>{val}</p>
            <input
              className="border-b-4 bg-[#ffede9] text-[#6c7983] rounded border-[#ff7461] w-full py-2  flex justify-center outline-none pl-10 pr-5 text-center placeholder:text-[#6c7983] font-poppins font-light text-sm placeholder:text-xs"
              placeholder="Enter Budget"
              value={numValue}
              onChange={(e) => changeValue(e)}
              onBlur={(e) => handleBlur(e)}
            />
            <span className="text-[#6c7983] font-light absolute top-2 left-5">
              $
            </span>
          </div>
          <div className="flex gap-7   -bottom-8 items-center justify-center relative">
            <div className="w-9 flex cursor-pointer justify-center items-center h-9 rounded-full bg-[#7788f4]">
              <HiOutlineXMark className="text-white text-[29px]" />
            </div>
            <button
              className={` ${
                selectedBox !== 0 && numValue.length > 0 && val > 0
                  ? "bg-[#ff7461]"
                  : "bg-[#a7a7a7]"
              } uppercase px-5 py-2 text-white rounded-2xl text-sm font-light tracking-wider outline-none`}
              onClick={() => {
                selectedBox !== 0 &&
                  numValue.length > 0 &&
                  val > 0 &&
                  handleAddToBudget();
              }}
            >
              create
            </button>
          </div>
        </div>
        <div className="mt-14">
          <div className="flex justify-between">
            <h3 className="font-bold text-[#6c7983]">
              ({newBudgetList.length}) Budgets
            </h3>
            <button className="bg-gradient-to-tl from-indigo-300 to-red-400 text-white text-xs py-2 px-5 rounded-md">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Budgets;
