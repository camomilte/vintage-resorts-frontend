import { useQuery } from "@tanstack/react-query";
import type { Amenity } from "../types/amenitiesTypes";
import { getAmenities } from "../services/getAmenities";

export function useAmenities() {
  return useQuery<Amenity[]>({
    queryKey:["amenities"],
    queryFn: getAmenities,
  });
};