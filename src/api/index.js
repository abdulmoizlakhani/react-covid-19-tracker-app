import axios from "axios";

const BASE_URL = "https://covid2019-api.herokuapp.com/v2";

export const fetchData = async () => {
  try {
    const {
      data: {
        data: { confirmed, deaths, recovered, active },
        dt,
      },
    } = await axios.get(`${BASE_URL}/total`);
    return { confirmed, deaths, recovered, active, lastUpdate: dt };
  } catch (error) {
    console.log(error, "ERROR");
  }
};

export const fetchDailyData = async () => {
  try {
    const {
      data: { data, dt },
    } = await axios.get(`${BASE_URL}/current`);
    return { data, lastUpdate: dt };
  } catch (error) {
    console.log(error, "ERROR");
  }
};
