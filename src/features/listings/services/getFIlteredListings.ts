import { api } from "../../../api/axios"
import type { SearchFilters } from "../types/filterTypes";
import type { Listing } from "../types/listingTypes";

export const getFilteredListings = async(filters: SearchFilters): Promise<{ listings:Listing[]}> => {
  const res = await api.post("/listings/filter", filters);
  return res.data.data;
}
