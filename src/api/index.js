import axios from "axios";

const BASE_URL = "https://covid-19-data.p.rapidapi.com";
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
  let result = {};
  if (data?.length) {
    const { confirmed, deaths, recovered, lastUpdate } = data[0];
    result = {
      confirmed,
      deaths,
      recovered,
      lastUpdate: new Date(lastUpdate).toDateString(),
    };
  }
  return result;
};

export const fetchData = async () => {
  try {
    const { data } = await axios.request(get(`${BASE_URL}/totals`));
    return getFormattedData(data);
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
      get(`${BASE_URL}/country`, { name: country })
    );
    return getFormattedData(data);
  } catch (error) {
    console.log(error, "ERROR");
  }
};
