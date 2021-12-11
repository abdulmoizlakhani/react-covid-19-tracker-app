import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchDataByCountry } from "./api";
import coronaImage from "./image/image.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [data, updateData] = useState({});
  const [country, updateCountry] = useState("global");

  useEffect(() => {
    async function getData() {
      if (country === "global") {
        updateData(await fetchData());
      } else {
        updateData(await fetchDataByCountry(country));
      }
    }
    getData();
  }, [country]);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="Covid-19 App Logo" />
      <Cards data={data} />
      <CountryPicker country={country} updateCountry={updateCountry} />
      <Chart country={country} data={data} />
    </div>
  );
}

export default App;
