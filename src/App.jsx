import Navbar from "./Components/Navbar";
import Homepage from "./Pages/HomePage";
import Budgets from "./Pages/Budgets";
import Expense from "./Pages/Expense";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import History from "./Pages/History";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/budget" element={<Budgets />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
