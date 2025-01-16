import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const options: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};
const API: AxiosInstance = axios.create(options);

API.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError): Promise<never> => {
    if (error.response) {
      const { status, data } = error.response;
      const dataObj = typeof data === "object" && data !== null ? data : {};
      return Promise.reject({ status, ...dataObj });
    }
    return Promise.reject(error);
  }
);

export default API;
