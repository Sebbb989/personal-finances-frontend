"use client";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["Food", "Transport", "Shopping", "Bills"],
  datasets: [
    {
      label: "Expenses",
      data: [120, 90, 150, 80],
      backgroundColor: ["#f87171", "#60a5fa", "#a78bfa", "#fbbf24"],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: true, labels: { color: "#f4f4f5" } },
    tooltip: { enabled: true },
  },
  scales: {
    x: { ticks: { color: "#f4f4f5" } },
    y: { ticks: { color: "#f4f4f5" } },
  },
};

export default function ExpensesChart() {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
      <Bar data={data} options={options} />
    </div>
  );
}
