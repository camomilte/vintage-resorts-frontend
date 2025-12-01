import { api } from "../../../api/axios";
import type { Amenity, AmentiesResponse } from "../types/amenitiesTypes";

export const getEras = async (): Promise<Amenity[]> => {
  const res = await api.get<AmentiesResponse>("/listings/eras");
  return res.data.data;
}