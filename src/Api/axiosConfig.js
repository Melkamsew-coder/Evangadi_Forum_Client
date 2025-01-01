import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:5500/api",
  baseURL: "https://evangadi-forum-server-ye8c.onrender.com",
});

export default axiosBase;