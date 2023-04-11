import Header from "../Components/Header";
import { data } from "../data.jsx";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Budgets() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [numValue, setNumValue] = useState();
  const changeValue = (e) => {
    const re = /^[0-9\b]+$/;
    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setNumValue(e.target.value);
    }
  };
  return (
    <section className="bg-[#7788f479] h-screen font-poppins">
      <div className=" lg:ml-[320px] px-5" data-aos="fade-out">
        <Header />

        <h2 className="underline font-bold text-xl lg:text-2xl text-center mt-8 mb-5">
          Create Your Expenses
        </h2>
        <div className="bg-white p-12">
          <h3 className="text-[#6c7983] text-center mb-5">Choose a Category</h3>
          <div className="grided">
            {data.map((d) => {
              return (
                <div className="bg-[#7788f479]  inline-block justify-center items-center py-3 lg:py-6 rounded">
                  <div className="bg-[#7788f4] p-1 rounded-full self-center w-8 mx-auto mb-1">
                    <div className="text-white text-2xl"> {d.icon}</div>
                  </div>
                  <p className="font-light text-xs text-center">{d.role}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white px-8 pt-8 pb-3 mt-8 relative">
          <h3 className="text-black text-center mb-5">Enter Amount</h3>
          <div className="relative  w-[80%] max-w-[200px] mx-auto">
            <input
              className="border-b-4 bg-[#7788f479] text-[#6c7983] rounded border-[#7788f4] w-full py-2  flex justify-center outline-none pl-10 pr-5 text-center placeholder:text-[#6c7983] font-poppins font-light text-sm placeholder:text-xs"
              placeholder="Enter Budget"
              value={numValue}
              onChange={(e) => changeValue(e)}
            />
            <span className="text-[#6c7983] font-light absolute top-2 left-5">
              $
            </span>
          </div>
          <div className="flex gap-7   -bottom-8 items-center justify-center relative">
            <div className="w-9 flex cursor-pointer justify-center items-center h-9 rounded-full bg-[#ff7461]">
              <HiOutlineXMark className="text-white text-[29px]" />
            </div>
            {/* <MdCancel className="text-[#7788f4] text-4xl cursor-pointer self-center" /> */}
            <button className="bg-[#a7a7a7] uppercase px-5 py-2 text-white rounded-2xl text-sm font-light tracking-wider">
              create
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Budgets;
