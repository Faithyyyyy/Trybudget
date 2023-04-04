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

function Budgets() {
  return (
    <section className="bg-[#ffede9] h-screen font-poppins">
      <div className=" lg:ml-[320px] px-5">
        <Header />

        <h2 className="underline font-bold text-xl lg:text-2xl text-center mt-8 mb-5">
          Create Your Budgets
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
      </div>
    </section>
  );
}

export default Budgets;
