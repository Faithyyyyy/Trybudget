import Header from "../Components/Header";
import BudgetCard from "../Components/BudgetCard";
import { FaGraduationCap } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoShirtOutline } from "react-icons/io5";
import { RiStethoscopeLine } from "react-icons/ri";
import { AiOutlineCar } from "react-icons/ai";
import { MdRouter } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { BsBuildingsFill } from "react-icons/bs";
import { BsLightningChargeFill } from "react-icons/bs";
import { HiOutlineXMark } from "react-icons/hi2";

import { useState } from "react";

function Budgets() {
  const [numValue, setNumValue] = useState();
  const changeValue = (e) => {
    const re = /^[0-9\b]+$/;
    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setNumValue(e.target.value);
    }
  };
  return (
    <section className="bg-[#7788f479] h-screen font-poppins">
      <div className=" lg:ml-[320px] px-5">
        <Header />

        <h2 className="underline font-bold text-xl lg:text-2xl text-center mt-8 mb-5">
          Create Your Expenses
        </h2>
        <div className="bg-white p-12">
          <h3 className="text-[#6c7983] text-center mb-5">Choose a Category</h3>
          <div className="grided">
            <BudgetCard roles="Education">
              <FaGraduationCap className="text-[#ff7461] text-2xl" />
            </BudgetCard>
            <BudgetCard roles="Food">
              <GiHotMeal className="text-[#ff7461] text-2xl" />
            </BudgetCard>
            <BudgetCard roles="Travel">
              <IoAirplaneSharp className="text-[#ff7461] text-2xl" />
            </BudgetCard>
            <BudgetCard roles="Clothes">
              <IoShirtOutline className="text-[#ff7461] text-2xl" />
            </BudgetCard>
            <BudgetCard roles="Health">
              <RiStethoscopeLine className="text-[#ff7461] text-2xl" />
            </BudgetCard>
            <BudgetCard roles="Transport">
              <AiOutlineCar className="text-[#ff7461] text-2xl" />
            </BudgetCard>
            <BudgetCard roles="Internet">
              <MdRouter className="text-[#ff7461] text-2xl" />
            </BudgetCard>
            <BudgetCard roles="Internet">
              <MdRouter className="text-[#ff7461] text-2xl" />
            </BudgetCard>
            <BudgetCard roles="Shopping">
              <BsCart4 className="text-[#ff7461] text-2xl" />
            </BudgetCard>
            <BudgetCard roles="Rent">
              <BsBuildingsFill className="text-[#ff7461] text-2xl" />
            </BudgetCard>
            <BudgetCard roles="Rent">
              <BsLightningChargeFill className="text-[#ff7461] text-2xl" />
            </BudgetCard>
          </div>
        </div>
        <div className="bg-white px-8 pt-8 pb-3 mt-8 relative">
          <h3 className="text-black text-center mb-5">Enter Amount</h3>
          <div className="relative  w-[80%] max-w-[200px] mx-auto">
            <input
              className="border-b-4 bg-[#ffede9] text-[#6c7983] rounded border-[#ff7461] w-full py-2  flex justify-center outline-none pl-10 pr-5 text-center placeholder:text-[#6c7983] font-poppins font-light text-sm placeholder:text-xs"
              placeholder="Enter Budget"
              value={numValue}
              onChange={(e) => changeValue(e)}
            />
            <span className="text-[#6c7983] font-light absolute top-2 left-5">
              $
            </span>
          </div>
          <div className="flex gap-7   -bottom-8 items-center justify-center relative">
            <div className="w-9 flex cursor-pointer justify-center items-center h-9 rounded-full bg-[#7788f4]">
              <HiOutlineXMark className="text-white text-[29px]" />
            </div>
            {/* <MdCancel className="text-[#7788f4] text-4xl cursor-pointer self-center" /> */}
            <button className="bg-[#a7a7a7] uppercase px-5 py-2 text-white rounded-2xl text-sm font-light tracking-wider">
              create
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Budgets;
