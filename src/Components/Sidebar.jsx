function Sidebar() {
  return (
    <aside className="px-3 hidden lg:block w-[300px] fixed h-full bg-[#ff7461] top-0 left-0 pt-14">
      <div className="h-52 rounded w-full  lg:block bg-white/30 text-center text-white">
        <div className=" mx-auto max-h-[150px] w-[150px] translate-y-full">
          <h2 className="font-semibold text-2xl">$0.00</h2>
          <p className="mt-1">Current Budget</p>
        </div>
      </div>
      <div>
        {/* home */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  text-gray-400 navlink"
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
        </div>
        {/* budget */}
      </div>
    </aside>
  );
}

export default Sidebar;
