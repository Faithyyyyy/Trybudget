import { Link } from "react-router-dom";
function EmptyExpenseStats() {
  return (
    <div className="flex justify-center items-center gap-4 flex-col mt-8 py-5">
      <div className="bg-[#dfd3e9] p-1 rounded-md inline-block">
        <div className="bg-gradient-to-tl from-indigo-300 to-red-400 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
      <p className="text-[#6c7983] text-center text-xs">
        Your expenses stats appears here when you start spending.
      </p>
      <Link
        to="/expense"
        className="bg-[#7788f4] text-white px-6 text-xs py-3 rounded"
      >
        Start Spending
      </Link>
    </div>
  );
}

export default EmptyExpenseStats;
