import { api } from "../../../api/axios";
import type { Listing, ListingResponse } from "../types/listingTypes";

export const getListingById = async (listing_id: number): Promise<Listing> => {
  const res = await api.get<ListingResponse>(`/listings/${listing_id}`);
  return {
    ...res.data.data,
    created_at: new Date(res.data.data.created_at)
  };
};