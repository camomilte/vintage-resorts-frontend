import { api } from "../../../api/axios";
import type { AmentiesResponse, Amenity } from "../types/amenitiesTypes";

export const getAmenities = async (): Promise<Amenity[]> => {
  const res = await api.get<AmentiesResponse>("/listings/amenities");
  return res.data.data;
}