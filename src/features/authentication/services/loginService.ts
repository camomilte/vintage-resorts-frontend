import { api } from "../../../api/axios";

export interface LoginData {
  email: string;
  password: string;
}

export interface ResData {
  token: string;
}

export const loginUser = async (data:LoginData) => {
  const res = await api.post("/auth/login", data);
  return res.data;
}