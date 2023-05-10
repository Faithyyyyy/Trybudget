import Header from "../Components/Header";
import { ImStatsDots } from "react-icons/im";
import BudgetStats from "../Components/BudgetStatsChart";
import ExpenseStats from "../Components/ExpenseStatsChart";
function History() {
  return (
    <div className="bg-[#ffede9] min-h-screen font-poppins pb-20">
      <div className=" max-w-[1420px] largeScreenCentered ">
        <div className="px-5 lg:ml-[320px]">
          <Header />
          <div className="mt-14 flex flex-col gap-5 ">
            {/* Budget History statistics */}
            <div className="bg-white pb-7 px-3 rounded-lg">
              <div className="flex items-center gap-2 justify-center border-b border-[#dbe1e8] py-4 mb-5">
                <ImStatsDots className="text-[#6c7983]" />
                <p className="text-[#6c7983] text-xs md:text-sm">
                  Your Budget History/Stat
                </p>
              </div>
              <div className=" ">
                <BudgetStats />
              </div>
            </div>
            {/* Expense History statistics */}
            <div className="bg-white pb-7 px-3 rounded-lg">
              <div className="flex items-center gap-2 justify-center border-b border-[#dbe1e8] py-4 mb-5">
                <ImStatsDots className="text-[#6c7983]" />
                <p className="text-[#6c7983] text-xs md:text-sm">
                  Your Expenses History/Stat
                </p>
              </div>
              <div className=" ">
                <ExpenseStats />
              </div>
            </div>
            {/* Expense History statistics */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
