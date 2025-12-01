import { useQuery } from "@tanstack/react-query";
import type { Amenity } from "../types/amenitiesTypes";
import { getEras } from "../services/getEras";

export function useEras() {
  return useQuery<Amenity[]>({
    queryKey:["eras"],
    queryFn: getEras,
  });
};