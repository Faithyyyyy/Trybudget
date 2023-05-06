import { useSelector } from "react-redux";
import { PercentageConversion } from "../Utils/PercentageConversion";

function MobileExpressbar() {
  const { totalBudgetAmount } = useSelector((store) => {
    return store.budget;
  });
  const { totalExpenseAmount } = useSelector((store) => {
    return store.expense;
  });
  const convertToPercent = PercentageConversion(
    totalExpenseAmount,
    totalBudgetAmount
  );
  // if (totalExpenseAmount > totalBudgetAmount) {
  //   totalBudgetAmount = totalExpenseAmount;
  // }
  return (
    <section className="bg-white  lg:hidden rounded py-10 px-10  mt-10 mx-5">
      <p className="font-light text-sm text-gray-400">Expenses so far</p>
      <div className="flex justify-between my-2">
        <p className="font-light text-md">${totalExpenseAmount}</p>
        <p className="font-light text-md">${totalBudgetAmount}</p>
      </div>
      <label for="file"></label>
      <progress
        id="file"
        max={totalBudgetAmount}
        value={totalExpenseAmount}
      ></progress>
      <p></p>
    </section>
  );
}

export default MobileExpressbar;
