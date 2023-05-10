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
  const { budgetData, budgetLabel, expenseList } = useSelector((store) => {
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
  return (
    <div>
      <Bar data={data} />
    </div>
  );
}

export default ExpenseStats;
