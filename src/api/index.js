import axios from "axios";

const BASE_URL = "https://covid-19-data.p.rapidapi.com";

const get = (url) => ({
  method: "GET",
  url,
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_API_HOST,
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
  },
});

export const fetchData = async () => {
  try {
    const { data } = await axios.request(get(`${BASE_URL}/totals`));
    let result = {};
    if (data?.length) {
      const { confirmed, deaths, recovered, critical, lastUpdate } = data[0];
      result = {
        confirmed,
        deaths,
        recovered,
        critical,
        lastUpdate: new Date(lastUpdate).toDateString(),
      };
    }
    return result;
  } catch (error) {
    console.log(error, "ERROR");
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.request(get(`${BASE_URL}/report/totals`));
    return data;
  } catch (error) {
    console.log(error, "ERROR");
  }
};
