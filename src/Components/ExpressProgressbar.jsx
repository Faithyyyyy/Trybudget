import { useSelector } from "react-redux";
import { PercentageConversion } from "../Utils/PercentageConversion";
function Expressbar() {
  let r = 1000;
  let a = 200;
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
    <section className="bg-white  rounded py-10 px-10 w-full mt-10">
      <p className="font-light text-sm text-gray-400">Expenses so far</p>
      <div className="flex justify-between my-2">
        <p className="font-light text-md">${totalExpenseAmount}.00</p>
        <p className="font-light text-md">${totalBudgetAmount}.00</p>
      </div>
      <label for="file"></label>
      <progress
        id="file"
        max={totalBudgetAmount}
        value={totalExpenseAmount}
      ></progress>
    </section>
  );
}

export default Expressbar;
("");
