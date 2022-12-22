"use client";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import styles from "./years-options-row.module.css";
import { aqusitionsState, expensesState, transactionsState } from "../../data/transactionState";

//
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { EOL } from "os";
import StatisticsTable from "./statistics-table";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function YearsRow() {
  const [expensesList, ___] = useRecoilState(expensesState);
  const [revenuesList, __] = useRecoilState(aqusitionsState);
  const years = [
    ...new Set([...expensesList, ...revenuesList].map((el) => new Date(el.date).getFullYear())),
  ];
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [filteredExpenses, setFilteredExpenses] = useState(
    expensesList.filter((el) => new Date(el.date).getFullYear() === selectedYear)
  );
  const [fliteredRevenues, setFliteredRevenues] = useState(
    revenuesList.filter((el) => new Date(el.date).getFullYear() === +selectedYear)
  );

  useEffect(() => {
    setFliteredRevenues(
      revenuesList.filter((el) => new Date(el.date).getFullYear() === +selectedYear)
    );
    setFilteredExpenses(
      expensesList.filter((el) => new Date(el.date).getFullYear() === selectedYear)
    );
  }, [selectedYear]);

  const labels = [
    ...new Set(
      [...expensesList, ...revenuesList].map((el) =>
        new Date(el.date).toLocaleString("en", {
          month: "long",
        })
      )
    ),
  ];
  const options = {
    responsove: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Overview in the year of ${selectedYear}`,
      },
    },
  };

  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "Expenses",
        data: [
          filteredExpenses.map((el) => el.amount).reduce((accumulator, el) => accumulator + el, 0),
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Revenue",
        data: [
          fliteredRevenues.map((el) => el.amount).reduce((accumulator, el) => accumulator + el, 0),
        ],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });

  return (
    <div className={styles["container"]}>
      <h3 className={styles["title"]}>Select the year to see the overview</h3>
      <div className={styles["years-row"]}>
        {years.map((year: number, i: number) => (
          <button
            key={i}
            className={`${styles["btn"]} ${styles.active}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <Bar options={options} data={data} />;
      <StatisticsTable
        revenuesList={revenuesList}
        expensesList={expensesList}
        year={selectedYear}
      />
    </div>
  );
}
