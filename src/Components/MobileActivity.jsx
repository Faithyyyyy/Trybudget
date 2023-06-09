import ActivityChart from "./ActivityChart";
import { useSelector } from "react-redux";
import EmptyActivity from "./emptyActivity";

function MobileActivity() {
  const { totalBudgetAmount, budgetList } = useSelector((store) => {
    return store.budget;
  });
  return (
    <section className="bg-white rounded py-10 px-10 lg:hidden mt-10 mx-5">
      <div className="flex justify-between">
        <h2 className="font-black uppercase">Activity</h2>
        <div className="">
          <p className="text-xs text-gray-400 font-extrabold tracking-widest uppercase">
            budgets
          </p>
          <p className="font-light text-sm text-gray-500">
            {" "}
            {budgetList.length} total
          </p>
        </div>
      </div>
      {budgetList.length > 0 ? <ActivityChart /> : <EmptyActivity />}
    </section>
  );
}

export default MobileActivity;
