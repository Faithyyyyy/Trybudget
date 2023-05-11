import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  registerables,
} from "chart.js";
import { Bar, Chart } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { data as listItems } from "../data";
// Chart.register(...registerables);
// ChartJS.register(, LinearScale, BarElement, Tooltip, Legend);

ChartJS.register(CategoryScale, ...registerables);

function ExpenseStats() {
  const { expenseList } = useSelector((store) => {
    return store.expense;
  });
  let exps = [];
  let explabel = [];
  const getExpList = () => {
    exps = expenseList.map((expList) => {
      return expList.amount;
    });
    return exps;
  };
  const getExpLabel = () => {
    explabel = expenseList.map((expList) => {
      return expList.name;
    });
    return explabel;
  };

  const data = {
    labels: getExpLabel(),
    datasets: [
      {
        label: "Expense",
        data: getExpList(),
        backgroundColor: [
          "#ff7461",
          "#e52165",
          "#5c3c92",
          "#fbcbc9",
          "#36a2eb",
          "#cbf6db",
          "#0d1137",
          "#077b8a",
          "#12a4d9",
          "#b20238",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const day = new Date().getDate();

  var today = new Date();
  var month = today.toLocaleString("default", { month: "long" });

  const now = new Date();
  function padTo2Digits(num) {
    return String(num).padStart(2, "0");
  }
  const hoursAndMinutes = now.getHours() + ":" + padTo2Digits(now.getMinutes());

  return (
    <div>
      <Bar data={data} />
      <div className="grid statsGrid w-full mt-8">
        {expenseList?.map((expense, index) => {
          return (
            <div
              key={expense.id}
              className="bg-[#fbfbfb] flex my-3 md:mb-0 justify-between items-center py-2 px-3 rounded "
            >
              <div className="flex gap-3 items-center">
                <div className="bg-[#c3c9f4] p-1 rounded-full self-center w-7 h-7 mx-auto mb-1">
                  <div className="text-[#7788f4] text-xl ">
                    {listItems[expense.id - 1].icon}
                  </div>
                </div>
                <div>
                  <p className="font-light text-xs ">{expense.name}</p>
                  <p className="font-light text-[10px] mt-[2px] text-[#6c7983]">
                    <span>{day}</span> <span>{month}</span>{" "}
                    <span>{hoursAndMinutes}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className={`font-light text-xs text-center text-[#7788f4]`}>
                  {expense.amount}
                </p>
                <span className="text-[10px] text-[#6c7983]">USD</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExpenseStats;
