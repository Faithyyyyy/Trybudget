import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);

function ActivityChart() {
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
  const percentage = (budget) => {
    let totalItems = 0;
    for (let i = 0; i < budgetData.length; i += 1) {
      totalItems += budgetData[i];
    }
    return (budget / totalItems) * 100;
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
  return (
    <div className="flex flex-col xl:flex-row mt-14 xl:h-96 gap-10 items-center justify-center xl:gap-20">
      <Doughnut data={data} className="max-w-[500px] max-h-[500px]" />
      <div className="flex flex-wrap gap-6">
        {data.labels.map((item, index) => {
          return (
            <div
              className="bg-[#fbfbfb] bs mb-4 py-2 px-3 max-w-xl xl:w-[200px]"
              key={index}
            >
              <div className="flex items-center  gap-3">
                <div
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                  className={`rounded h-3 w-3`}
                ></div>
                <p className="text-[#6c7983] text-sm">{item}</p>
              </div>
              <p className="text-[#a7a7a7] text-xs font-light mt-1">
                {data.datasets[0].data[index]} USD -
                <span
                  style={{
                    color: data.datasets[0].backgroundColor[index],
                  }}
                  className={`ml-1 `}
                >
                  {percentage(data.datasets[0].data[index]).toFixed(2)}%
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActivityChart;
