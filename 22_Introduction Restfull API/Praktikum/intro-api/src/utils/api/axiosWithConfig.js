import axios from "axios";

let bearerToken = "";
let baseUrl = "https://651a8337340309952f0d6f8b.mockapi.io";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (token, backendUrl) => {
  baseUrl = backendUrl;
  bearerToken = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = baseUrl;
  axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;

  return axiosConfig;
});

export default axiosWithConfig;