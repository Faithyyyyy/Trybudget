import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Budgets from "./Pages/Budgets";
import Expense from "./Pages/Expense";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/budget" element={<Budgets />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </div>
  );
}

export default App;
