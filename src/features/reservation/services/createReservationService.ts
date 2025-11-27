import { api } from "../../../api/axios";

export const createReservationService = async (user_id: number, data: any) => {
  const res = await api.post(`/users/${user_id}/reserv`, data);
  return res.data;
};


