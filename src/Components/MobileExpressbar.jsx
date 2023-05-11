import { useSelector } from "react-redux";
import { PercentageConversion } from "../Utils/PercentageConversion";

function MobileExpressbar() {
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
  return (
    <section className="bg-white  lg:hidden rounded py-10 px-3  mt-10 mx-5">
      <p className="font-light text-sm text-gray-400">Expenses so far</p>
      <div className="flex justify-between my-2">
        <p className="font-light text-sm">${expenseTotals}.00</p>
        <p className="font-light text-sm">${totals}.00</p>
      </div>
      <label htmlFor="file"></label>
      <progress id="file" max={totals} value={expenseTotals}></progress>
    </section>
  );
}

export default MobileExpressbar;
