import { api } from "../../../api/axios";
import type { LoginData } from "../types";

export const loginUser = async (data:LoginData) => {
  const res = await api.post("/auth/login", data);
  return res.data;
}