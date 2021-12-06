import { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

function App() {
  const [data, updateData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetchData();
      updateData(response);
    }
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
