import { navigate } from "@/lib/navigation";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import queryClient from "./queryClient";

const options: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};
const TokenRefreshClient: AxiosInstance = axios.create(options);

TokenRefreshClient.interceptors.response.use(
  (response: AxiosResponse) => response.data
);

const API: AxiosInstance = axios.create(options);

API.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError): Promise<never> => {
    if (error.response) {
      const { config, response } = error;
      const { status, data } = response || {};
      const dataObj = typeof data === "object" && data !== null ? data : {};

      if (status === 401 && (data as any)?.errorCode === "Unauthorized") {
        try {
          await TokenRefreshClient.get("/auth/refresh");
          return TokenRefreshClient(config!);
        } catch (error) {
          queryClient.clear();
          navigate("/login");
        }
      }
      return Promise.reject({ status, ...dataObj });
    }
    return Promise.reject(error);
  }
);

export default API;
