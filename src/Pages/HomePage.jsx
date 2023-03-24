import Account from "../Components/Account";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function HomePage() {
  return (
    <div className="bg-[#ffede9] h-screen ">
      <Header />
      <Account />
      <Sidebar />
      <main className="ml-[320px] mr-8 max-w-7xl mx-auto hidden lg:block mt-14">
        <div className="w-full">
          <div className="w-full flex gap-6">
            <div className="w-[50%] bg-[#ff7461] h-52 rounded"></div>
            <div className="w-[50%] bg-[#7688F3] h-52 rounded"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
