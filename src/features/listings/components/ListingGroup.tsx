import { useListings } from "../hooks/useListings";
import { ListingCard } from "./ListingCard";
import { FaChevronRight } from 'react-icons/fa';

export const ListingGroup = () => {
  const { data, isLoading, isError, error } = useListings();

  if (isLoading) return <p>Loading...</p>;
  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className="flex gap-4 overflow-scroll ms-4 my-4 m">    
      {data?.map((listing) => (
        <ListingCard key={listing.listing_id} listing={listing} />
      ))}
      <div className="min-h-full min-w-30 desktop:min-w-48 flex flex-col text-sm gap-3 desktop:text-base desktop:gap-5 justify-center items-center">
        <button className="btn-primary icon-md desktop:icon-xl">
          <FaChevronRight className="size-full" />
        </button>
        <span className="text-center">More like this</span>
      </div>
    </div>
  )
};