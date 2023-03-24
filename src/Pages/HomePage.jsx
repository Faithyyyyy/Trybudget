import Account from "../Components/Account";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import AmountSpentSvg from "../Svgs/CurrentBalanceSvg";
import CurrentBalanceSvg from "../Svgs/CurrentBalanceSvg";
import SvgWrap from "../Reusable_Icons/Accoun_overview_svgs";

function HomePage() {
  return (
    <div className="bg-[#ffede9] h-screen ">
      <Header />
      <Account />
      <Sidebar />
      <main className="ml-[320px] mr-8 max-w-7xl mx-auto hidden lg:block mt-14">
        <div className="w-full">
          <div className="w-full flex gap-6">
            <div className="w-[50%] bg-[#ff7461] h-52 rounded bg-[url(https://trybudget.netlify.app/static/media/bg-pattern.2d6e7fc4fd2fc3ff90ce.svg)] bg-no-repeat bg-left-top text-white pl-10 flex flex-col justify-center ">
              <SvgWrap>
                <CurrentBalanceSvg />
              </SvgWrap>
              <p className="mt-2 ">Current Balance</p>
              <p className="text-2xl font-light">$0.00</p>
            </div>
            <div className="w-[50%] bg-[#7688F3] h-52 rounded"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
