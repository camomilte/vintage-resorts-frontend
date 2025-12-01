import { useQuery } from "@tanstack/react-query";
import type { Listing } from "../types/listingTypes";
import { getListingById } from "../services/getListingById";

export const useListing = (listing_id: number) => {
  return useQuery<Listing>({
    queryKey:["listing", listing_id],
    queryFn: () => getListingById(listing_id),
    enabled: !!listing_id
  });
};