import axios from "axios";
import type { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.response.use(
  // Run on successfull response
  res => res,

  // Run in case of error
  err => {
    // If error status is a 401
    if(err.response?.status === 401) {
      // Remove token fromm localStorage
      localStorage.removeItem("token");
    }
    // Reject promise
    return Promise.reject(err)
  }
)