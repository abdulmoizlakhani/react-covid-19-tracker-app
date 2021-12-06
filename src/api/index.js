import axios from "axios";

const API_URL = "https://covid2019-api.herokuapp.com/total";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, deaths, recovered, dt },
    } = await axios.get(API_URL);
    return { confirmed, deaths, recovered, lastUpdate: dt };
  } catch (error) {
    console.log(error, "ERROR");
  }
};
