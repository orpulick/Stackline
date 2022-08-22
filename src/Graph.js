import "./graph.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Retail Sales",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function Graph({ sales }) {
  const calculateLableNum = (month) => {
    const result = sales.reduce((total, value) => {
      const saleMonth = value.weekEnding.slice(5, 7);
      //console.log(saleMonth);
      if (month === saleMonth) {
        //console.log(total+1)
        return total + 1;
      } else {
        return total;
      }
    }, 0);
    return result;
  };

  const createLabels = () => {
    const newLabels = [];
    for (let i = 0; i < labels.length; i++) {
      newLabels.push(labels[i]);
      const monthString = i < 9 ? "0" + (i + 1) : (i + 1).toString();

      const saleNum = calculateLableNum(monthString);
      console.log(saleNum);
      for (let j = 1; j < saleNum; j++) {
        newLabels.push("");
      }
    }
    return newLabels;
  };
  console.log(createLabels());

  const data = {
    labels: createLabels(),
    datasets: [
      {
        label: "Retail Sales",
        data: sales.map((item) => item.retailSales),
        borderColor: "#43A7F6",
        backgroundColor: "#43A7F6",
      },
      {
        label: "Whole Sales",
        data: sales.map((item) => item.wholesaleSales),
        borderColor: "#B4BCCE",
        backgroundColor: "#B4BCCE",
      },
    ],
  };
  return (
    <div className="Graph_module">
      <Line options={options} data={data} />
    </div>
  );
}
export default Graph;
