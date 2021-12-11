import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

import { fetchDailyData } from "../../api";
import styles from "./Chart.module.css";

export default function Chart(props) {
  const { data, country } = props;

  const [dailyData, updateDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      updateDailyData(await fetchDailyData());
    };
    // Used setTimeOut because API provider only allows 1 request per second
    setTimeout(() => {
      fetchAPI();
    }, 2000);
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
            data: dailyData.map(({ recovered }) => recovered),
            label: "Recovered",
            borderColor: "rgb(0, 255, 0)",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
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

  const barChart = data?.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [data.confirmed, data.recovered, data.deaths],
          },
        ],
      }}
      options={{
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: `Current state in ${country}`,
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {country === "global" ? lineChart : barChart}
    </div>
  );
}
