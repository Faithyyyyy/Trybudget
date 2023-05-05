import AmountSpentSvg from "../Svgs/CurrentBalanceSvg";
import CurrentBalanceSvg from "../Svgs/CurrentBalanceSvg";
import SvgWrap from "../Reusable_Icons/Accoun_overview_svgs";
import { useSelector, useDispatch } from "react-redux";

function Account() {
  const { totalBudgetAmount } = useSelector((store) => {
    return store.budget;
  });
  const { totalExpenseAmount } = useSelector((store) => {
    return store.expense;
  });
  const total = totalBudgetAmount + totalExpenseAmount;
  return (
    <main>
      {/* Mobile screen account */}
      <div className="bg-white pt-7 px-3 pb-3 rounded mx-5 lg:hidden">
        <p className="text-gray-400 text-sm mb-2">Budget</p>
        <p className="text-2xl md:text-3xl mb-3">${total}.00</p>
        <div className="text-white bg-gradient-to-tl from-indigo-300 to-red-400 p-2 rounded w-full py-10 px-5 flex justify-between items-center account_oveview relative overflow-hidden">
          {/* MONEY BUDGETTED */}
          <div>
            <SvgWrap>
              <CurrentBalanceSvg />
            </SvgWrap>
            <p>Balance</p>
            <p>${totalBudgetAmount}.00</p>
          </div>
          {/* MONEY BUDGETTED */}
          {/* White divider */}
          <div className=" h-[50px] bg-white w-[1.5px]"></div>
          {/* White divider */}
          {/* MONEY SPENT */}
          <div>
            <SvgWrap>
              <AmountSpentSvg />
            </SvgWrap>
            <p>Balance</p>
            <p>${totalExpenseAmount}.00</p>
          </div>
          {/* MONEY SPENT */}
        </div>
      </div>
      {/* Mobile screen account */}
      {/* Larger screen account */}
      {/* Larger screen account */}
    </main>
  );
}

export default Account;
