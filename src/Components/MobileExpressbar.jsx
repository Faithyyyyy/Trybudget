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

  return (
    <section className="bg-white  lg:hidden rounded py-10 px-3  mt-10 mx-5">
      <p className="font-light text-sm text-gray-400">Expenses so far</p>
      <div className="flex justify-between my-2">
        <p className="font-light text-md">${totalExpenseAmount}.00</p>
        <p className="font-light text-md">${totalBudgetAmount}.00</p>
      </div>
      <label htmlFor="file"></label>
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
