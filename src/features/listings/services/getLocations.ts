import { api } from "../../../api/axios";
import type { locationResponse, Location } from "../types/locationTypes";

export const getLocations = async (): Promise<Location[]> => {
  const res = await api.get<locationResponse>("/listings/locations");
  return res.data.data;
}