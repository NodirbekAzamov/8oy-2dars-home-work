import axios from "axios";

const axiosClient = axios.create({
  // baseURL: import.meta.env.VITE_APP_BASE_URL,
  baseURL: "http://34.143.212.163:3000/api",
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axiosClient;
