import { api } from "../../../api/axios";
import type { Listing, ListingResponse } from "../types";

export const getListings = async (): Promise<Listing[]> => {
  const res = await api.get<ListingResponse>("/listings");
  return res.data.data;
};

