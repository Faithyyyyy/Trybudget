import Account from "../Components/Account";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function HomePage() {
  return (
    <div className="bg-[#ffede9] h-screen">
      <Header />
      <Account />
      <Sidebar />
    </div>
  );
}

export default HomePage;
