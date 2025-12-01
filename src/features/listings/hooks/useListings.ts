import { useQuery } from "@tanstack/react-query";
import { getListings } from "../services/getListings";
import type { Listing } from "../types/listingTypes";

export function useListings() {
  return useQuery<Listing[]>({
    queryKey:["listings"],
    queryFn: getListings,
  });
};