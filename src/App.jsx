import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
