import { api } from "../../../api/axios";
import type { User } from "../types/userType";

export const getCurrentUser = async (token: string): Promise<User> => {
  const res = await api.get<User>(`/users/me`,{
    headers: { Authorization: `Bearer ${token}` }
  }
  );
  return {
    ...res.data
  }
}