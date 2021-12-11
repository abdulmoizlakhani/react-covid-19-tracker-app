import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";
import styles from "./Chart.module.css";

export default function Chart() {
  const [dailyData, updateDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      updateDailyData(await fetchDailyData());
    };
    // Used setTimeOut because API provider only allows 1 request per second
    setTimeout(() => {
      fetchAPI();
    }, 1500);
  }, []);

  const lineChart = dailyData?.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ critical }) => critical),
            label: "Critical",
            borderColor: "yellow",
            backgroundColor: "rgba(255, 255, 0, 0.1)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
}
