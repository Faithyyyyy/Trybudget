import Header from "../Components/Header";
import { ImStatsDots } from "react-icons/im";
import ActivityChart from "../Components/ActivityChart";
function History() {
  return (
    <div className="bg-[#ffede9] min-h-screen font-poppins ">
      <div className="px-5">
        <Header />
        <div>
          {/* Budget History statistics */}
          <div className="bg-white h-96 px-3 ">
            <div className="flex items-center gap-2 justify-center border-b border-[#dbe1e8] py-4">
              <ImStatsDots className="text-[#6c7983]" />
              <p className="text-[#6c7983] text-xs md:text-sm">
                Your Budget History/Stat
              </p>
            </div>
          </div>
          {/* Expense History statistics */}
        </div>
      </div>
    </div>
  );
}

export default History;
