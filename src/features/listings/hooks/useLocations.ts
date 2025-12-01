import { useQuery } from "@tanstack/react-query";
import type { Location } from "../types/locationTypes";
import { getLocations } from "../services/getLocations";

export function useLocations() {
  return useQuery<Location[]>({
    queryKey:["locations"],
    queryFn: getLocations,
  });
};