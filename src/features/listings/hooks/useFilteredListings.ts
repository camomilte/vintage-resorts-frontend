import { useMutation } from "@tanstack/react-query"
import { getFilteredListings } from "../services/getFIlteredListings"
import type { SearchFilters } from "../types/filterTypes"
import type { Listing } from "../types/listingTypes"

export const useFilteredListings = () => {
  return useMutation<{ listings: Listing[] }, Error, SearchFilters>({
    mutationFn: (filters) => getFilteredListings(filters)
  });
};