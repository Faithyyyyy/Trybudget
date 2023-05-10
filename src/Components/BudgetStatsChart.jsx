import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { data as listItems } from "../data";
ChartJS.register(ArcElement, Tooltip, Legend);
function BudgetStats() {
  const { budgetData, budgetLabel, budgetList } = useSelector((store) => {
    return store.budget;
  });
  let bud = [];
  let label = [];
  const getBudList = () => {
    bud = budgetList.map((budList) => {
      return budList.amount;
    });
    return bud;
  };
  const getbudLabel = () => {
    label = budgetList.map((budList) => {
      return budList.name;
    });
    return label;
  };
  const data = {
    labels: getbudLabel(),
    datasets: [
      {
        label: "Budget",
        data: getBudList(),
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

  const config = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
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
    <div className="flex flex-col items-center justify-center ">
      <Doughnut data={data} className="max-w-[400px] max-h-[400px]" />
      <div className="grid statsGrid w-full">
        {budgetList?.map((budget, index) => {
          return (
            <div
              key={budget.id}
              className="bg-[#fbfbfb] flex my-3 md:mb-0 justify-between items-center py-2 px-3 rounded "
            >
              <div className="flex gap-3 items-center">
                <div className="bg-[#f9e0d9] p-1 rounded-full self-center w-7 h-7 mx-auto mb-1">
                  <div className="text-[#ff7461] text-xl ">
                    {listItems[budget.id - 1].icon}
                  </div>
                </div>
                <div>
                  <p className="font-light text-xs ">{budget.name}</p>
                  <p className="font-light text-[10px] mt-[2px] text-[#6c7983]">
                    <span>{day}</span> <span>{month}</span>{" "}
                    <span>{hoursAndMinutes}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p
                  className={`font-light text-xs text-center text-[${data.datasets[0].backgroundColor[index]}]`}
                >
                  {console.log(data.datasets[0].backgroundColor[index])}
                  {budget.amount}
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

export default BudgetStats;
