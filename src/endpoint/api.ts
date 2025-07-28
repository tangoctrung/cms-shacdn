import axios from "axios";
import { API_URL } from "./config";
import { TOKEN_FAKE } from "@/constant";

const AxiosInstance = axios.create({
  baseURL: API_URL,
});

AxiosInstance.interceptors.request.use(
  (request: any) => {
    const accessToken: string =
      localStorage.getItem("accessToken") || TOKEN_FAKE;
    request.headers["Accept"] = "application/json";
    request.headers["Authorization"] = `Bearer ${accessToken}`;
    request.headers["Content-Type"] = "application/json; charset=utf-8";
    return request;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (v: any) => v,
  async (error: any) => {
    const originalConfig = error?.config;

    if (originalConfig && error?.response?.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userId");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
