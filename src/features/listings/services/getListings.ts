import { api } from "../../../api/axios";
import type { Listing, ListingsResponse } from "../types/listingTypes";

export const getListings = async (): Promise<Listing[]> => {
  const res = await api.get<ListingsResponse>("/listings");
  return res.data.data;
};

