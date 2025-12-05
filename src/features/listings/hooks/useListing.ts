import { useQuery } from "@tanstack/react-query";
import type { Listing } from "../types/listingTypes";
import { getListingAmenities, getListingById } from "../services/getListingById";
import type { Amenity } from "../types/amenitiesTypes";

export const useListing = (listing_id: number) => {
  return useQuery<Listing>({
    queryKey:["listing", listing_id],
    queryFn: () => getListingById(listing_id),
    enabled: !!listing_id
  });
};

export const useListinAmenities = (listing_id: number) => {
  return useQuery<Amenity[]>({
    queryKey: ["listingAmenities"],
    queryFn: () => getListingAmenities(listing_id),
    enabled: !!listing_id
  })
}