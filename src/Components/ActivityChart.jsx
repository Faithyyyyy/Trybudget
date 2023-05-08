import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);

function ActivityChart() {
  const { budgetData, budgetLabel } = useSelector((store) => {
    return store.budget;
  });
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
          // "rgb(75, 192, 192)",
          // "rgb(153, 102, 255)",
          // "rgb(255, 159, 64)",
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
            <div className="bg-[#fbfbfb] bs" key={index}>
              <div className="flex items-center gap-3">
                <div
                  className={`rounded bg-[${data.datasets[0].backgroundColor[index]}] h-3 w-3`}
                ></div>
                <p>{item}</p>
              </div>
              <p>
                {data.datasets[0].data[index]} USD
                <span></span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ActivityChart;
