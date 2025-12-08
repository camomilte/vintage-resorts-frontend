import { api } from "../../../api/axios";

export const createReservationService = async (user_id: number, data: any, token?: string | null) => {
  const res = await api.post(
    `/users/${user_id}/reserv`, 
    data,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
  return res.data;
};


