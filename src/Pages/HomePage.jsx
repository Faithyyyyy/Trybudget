import Account from "../Components/Account";
import Header from "../Components/Header";
import CurrentBalanceSvg from "../Svgs/CurrentBalanceSvg";
import SvgWrap from "../Reusable_Icons/Accoun_overview_svgs";
import Expressbar from "../Components/ExpressProgressbar";
import Activity from "../Components/Activity";
import MobileExpressbar from "../Components/MobileExpressbar";
import MobileActivity from "../Components/MobileActivity";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function HomePage() {
  const { totalBudgetAmount, budgetList } = useSelector((store) => {
    return store.budget;
  });
  const { totalExpenseAmount, expenseList } = useSelector((store) => {
    return store.expense;
  });
  const total = totalBudgetAmount + totalExpenseAmount;
  let totals = 0;
  budgetList.forEach((item) => {
    totals += parseInt(item.amount);
  });
  let expenseTotals = 0;
  expenseList.forEach((item) => {
    expenseTotals += parseInt(item.amount);
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budgetList));
  }, [budgetList]);
  return (
    <div className="bg-[#ffede9] pb-11 min-h-screen">
      <Header />
      <Account />

      <main
        className="ml-[320px] mr-8 max-w-7xl mx-auto hidden lg:block mt-14"
        data-aos="fade-out"
      >
        <div className="w-full">
          <div className="w-full flex gap-6">
            <div className="w-[50%] bg-[#ff7461] h-52 rounded bg-[url(https://trybudget.netlify.app/static/media/bg-pattern.2d6e7fc4fd2fc3ff90ce.svg)] bg-no-repeat bg-left-top text-white pl-10 flex flex-col justify-center ">
              <SvgWrap>
                <CurrentBalanceSvg />
              </SvgWrap>
              <p className="mt-2 mb-1">Current Balance</p>
              <p className="text-xl font-light">${totals}.00</p>
            </div>
            <div className="w-[50%] bg-[#7688F3] h-52 rounded bg-[url(https://trybudget.netlify.app/static/media/bg-pattern.2d6e7fc4fd2fc3ff90ce.svg)] bg-no-repeat bg-left-top text-white pl-10 flex flex-col justify-center ">
              <SvgWrap>
                <svg
                  fill="#7688F3"
                  viewBox="0 0 32 32"
                  className="h-5 w-5"
                  stroke="#7688F3"
                >
                  <path d="M29 4h-26c-1.65 0-3 1.35-3 3v18c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-18c0-1.65-1.35-3-3-3zM3 6h26c0.542 0 1 0.458 1 1v3h-28v-3c0-0.542 0.458-1 1-1zM29 26h-26c-0.542 0-1-0.458-1-1v-9h28v9c0 0.542-0.458 1-1 1zM4 20h2v4h-2zM8 20h2v4h-2zM12 20h2v4h-2z"></path>
                </svg>
              </SvgWrap>
              <p className="mt-2 mb-1">Amount Spent</p>
              <p className="text-xl font-light">${expenseTotals}.00</p>
            </div>
          </div>
        </div>
        <Expressbar />
        <Activity />
      </main>
      <MobileExpressbar />
      <MobileActivity />
    </div>
  );
}

export default HomePage;
