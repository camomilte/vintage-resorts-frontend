import { useQueryClient } from "@tanstack/react-query";
import type { Listing } from "../types/listingTypes";
import { FaRegFaceFrown } from "react-icons/fa6";
import { ListingCard } from "./ListingCard";


export const ListingGrid = () => {

  const queryClient = useQueryClient();

  // Pull filtered listings from cache
  const listings = queryClient.getQueryData<Listing[]>(["filteredListings"])

  if (!listings) {
    return (
      <div className="flex justify-center items-center">
        <p className="pe-2">No listings found </p>
        <FaRegFaceFrown />
      </div>
    )
  }


  return (
    <>
    <p className="pb-2 text-neutral-500">{listings.length} results</p>
    <div className="pb-15 grid grid-cols-2 gap-4">
        {listings.map(listing => (
          <div className="max-w-auto" key={listing.listing_id} >
            <ListingCard listing={listing}/>
          </div>
        ))}
    </div>
    </>
  )
}
