import AmountSpentSvg from "../Svgs/CurrentBalanceSvg";
import CurrentBalanceSvg from "../Svgs/CurrentBalanceSvg";
import SvgWrap from "../Reusable_Icons/Accoun_overview_svgs";
import { useSelector, useDispatch } from "react-redux";

function Account() {
  const { totalBudgetAmount, budgetList } = useSelector((store) => {
    return store.budget;
  });
  const { totalExpenseAmount, expenseList } = useSelector((store) => {
    return store.expense;
  });
  let totals = 0;
  budgetList.forEach((item) => {
    totals += parseInt(item.amount);
  });
  let expenseTotals = 0;
  expenseList.forEach((item) => {
    expenseTotals += parseInt(item.amount);
  });
  const total = totalBudgetAmount + totalExpenseAmount;
  return (
    <main>
      {/* Mobile screen account */}
      <div className="bg-white pt-7 px-3 pb-3 rounded mx-5 lg:hidden">
        <p className="text-gray-400 text-sm mb-2">Budget</p>
        <p className="text-xl md:text-3xl mb-3">${totals}.00</p>
        <div className="text-white bg-gradient-to-tl from-indigo-300 to-red-400 p-2 rounded w-full py-10 px-5 flex justify-between items-center account_oveview relative overflow-hidden">
          {/* MONEY BUDGETTED */}
          <div>
            <SvgWrap>
              <CurrentBalanceSvg />
            </SvgWrap>
            <p className="text-sm">Budget</p>
            <p className="text-sm">${totals}.00</p>
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
            <p className="text-sm">Expense</p>
            <p className="text-sm">${expenseTotals}.00</p>
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
