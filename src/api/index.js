import axios from "axios";

const BASE_URL = "https://covid-19-statistics.p.rapidapi.com";
const BASE_URL_2 = "https://covid2019-api.herokuapp.com";

const get = (url, params) => ({
  method: "GET",
  url,
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_API_HOST,
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
  },
  params,
});

const getFormattedData = (data) => {
  const { confirmed, deaths, recovered, last_update } = data;
  const result = {
    confirmed,
    deaths,
    recovered,
    lastUpdate: new Date(last_update).toDateString(),
  };
  return result;
};

export const fetchData = async () => {
  try {
    const { data } = await axios.request(get(`${BASE_URL}/reports/total`));
    return getFormattedData(data.data);
  } catch (error) {
    console.log(error, "ERROR");
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.request(get(`${BASE_URL}/reports`));
    return data.data;
  } catch (error) {
    console.log(error, "ERROR");
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.request(get(`${BASE_URL_2}/countries`));
    return countries;
  } catch (error) {
    console.log(error, "ERROR");
  }
};

export const fetchDataByCountry = async (country) => {
  try {
    const { data } = await axios.request(
      get(`${BASE_URL}/reports`, { q: country })
    );
    return getFormattedData(data.data[0]);
  } catch (error) {
    console.log(error, "ERROR");
  }
};
