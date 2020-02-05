import axios from "axios";

const httpService = axios.create({
  baseURL: "http://api.football-data.org",
  timeout: 1000,
  headers: {
    "X-Auth-Token": process.env.REACT_APP_FOOTBALL_API_KEY
  }
});

export default httpService;
