import { api } from "../../../api/axios";
import type { RegisterData } from "../types";

export const registerUser = async (data:RegisterData) => {
  const res = await api.post("/users/register", data);
  return res.data;
};