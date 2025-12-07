import { api } from "../../../api/axios";
import type { AmentiesResponse, Amenity } from "../types/amenitiesTypes";
import type { Listing, ListingResponse } from "../types/listingTypes";

export const getListingById = async (listing_id: number): Promise<Listing> => {
  const res = await api.get<ListingResponse>(`/listings/${listing_id}`);
  return {
    ...res.data.data,
    created_at: new Date(res.data.data.created_at)
  };
};

export const getListingAmenities = async (listing_id: number): Promise<Amenity[]> => {
  const res = await api.get<AmentiesResponse>(`/listings/${listing_id}/amenities`);
  return res.data.data;
};