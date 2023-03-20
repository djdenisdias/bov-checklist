import axios from "axios";

const api = axios.create({
  baseURL: "http://challenge-front-end.bovcontrol.com"
});

export default api;