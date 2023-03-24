import Home from "../Svgs/HomeSvg.jsx";
import NavBudgetSvg from "../Svgs/NavBudgetSvg.jsx";
function Navbar() {
  return (
    <nav className="bg-white rounded h-20 fixed bottom-10 left-0 nav">
      <Home />
      <NavBudgetSvg />
    </nav>
  );
}

export default Navbar;
