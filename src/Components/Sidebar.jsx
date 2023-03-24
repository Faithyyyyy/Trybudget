import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="px-3 hidden lg:block w-[300px] fixed h-full bg-[#ff7461] top-0 left-0 pt-14">
      <div className="h-52 rounded w-full  lg:block bg-white/30 text-center text-white">
        <div className=" mx-auto max-h-[150px] w-[150px] translate-y-full">
          <h2 className="font-semibold text-2xl">$0.00</h2>
          <p className="mt-1">Current Budget</p>
        </div>
      </div>
      <div className="mt-10">
        {/* home */}
        <NavLink
          to="/"
          className="flex items-center gap-5 cursor-pointer sideNav py-3 pl-2 rounded mb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[22px] w-[22px]  text-white/60 navlink text-sm font-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          <p className="text-white/60 text-md font-normal"> Home</p>
        </NavLink>
        {/* budget */}
        <NavLink
          to="/budget"
          className="flex items-center gap-5 cursor-pointer sideNav py-3 pl-2 rounded mb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white/60 navlink"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <p className="text-white/60 text-md font-normal"> Budget</p>
        </NavLink>
        {/* expenses */}
        <NavLink
          to="/expense"
          className="flex items-center gap-5 cursor-pointer sideNav py-3 pl-2 rounded mb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white/60 navlink"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p className="text-white/60 text-md font-normal"> Expenses</p>
        </NavLink>
        {/* history */}
        <NavLink
          to="/history"
          className="flex items-center gap-5 cursor-pointer sideNav py-3 pl-2 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white/60 navlink"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            ></path>
          </svg>
          <p className="text-white/60 text-md font-normal"> History</p>
        </NavLink>
        {/* end */}
      </div>
    </aside>
  );
}

export default Sidebar;
