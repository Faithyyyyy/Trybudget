import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);

function ActivityChart() {
  const { budgetData, budgetLabel } = useSelector((store) => {
    return store.budget;
  });

  const percentage = (budget) => {
    let totalItems = 0;
    for (let i = 0; i < budgetData.length; i += 1) {
      totalItems += budgetData[i];
    }
    return (budget / totalItems) * 100;
  };
  const data = {
    labels: budgetLabel,
    datasets: [
      {
        label: "Budget",
        data: budgetData,
        backgroundColor: [
          "#ff7461",
          "#e52165",
          "#5c3c92",
          "#fbcbc9",
          "#36a2eb",
          "#cbf6db",
          "#e52165",
          "#5c3c92",
          "#fbcbc9",
          "#f5f0e1",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "right",
      },
      datalabels: {
        color: "black",
        font: {
          weight: "bold",
        },
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} />
      <div>
        {data.labels.map((item, index) => {
          return (
            <div className="bg-[#fbfbfb] bs mb-4 py-2 px-3" key={index}>
              <div className="flex items-center gap-3">
                <div
                  className={`rounded bg-[${data.datasets[0].backgroundColor[index]}] h-3 w-3`}
                ></div>
                <p>{item}</p>
              </div>
              <p className="text-[#a7a7a7] text-xs font-light mt-1">
                {data.datasets[0].data[index]} USD -
                <span
                  className={`ml-1 text-[${data.datasets[0].backgroundColor[index]}]`}
                >
                  {percentage(data.datasets[0].data[index]).toFixed(2)}%
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ActivityChart;
