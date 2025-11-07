import { useParams } from "react-router";
import placeholder from '../assets/stock-apartment.jpg'
import { useListing } from "../features/listings/hooks/useListing.ts";
import { FaStar } from 'react-icons/fa';
import { useEffect, useRef, useState } from "react";

function ListingDetail() {
  const { listing_id } = useParams<{ listing_id: string }>();
  const listingId = Number(listing_id);
  const { data: listing, isLoading, isError, error } = useListing(listingId);

  const ref = useRef<HTMLParagraphElement>(null)
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setShowButton(
        ref.current.scrollHeight > ref.current.clientHeight
      )
    }
  }, [listing])

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <span>Error: {error.message}</span>;
  if (!listing) return null;




  return (
    <div className="relative">
      <div className="h-[400px] w-full">
        <img src={placeholder} alt="apartment image" className="size-full object-cover"/>
      </div>

      <div className="rounded-t-3xl bg-br-background -mt-10 relative">
        <div className="flex flex-col gap-4 border-b py-7 border-zinc-800 px-4">
          <h1 className="font-accent text-4xl text-center">{listing.title}</h1>
          <div className="text-neutral-400 flex flex-col text-center gap-1">
            <span>Room in {listing.city}, {listing.country}</span>
            <span>{listing.num_bedrooms} beds, {listing.num_bathrooms} bathrooms</span>
          </div>
          <div className="flex text-sm pt-3">
            <div className="flex w-full border-e border-brand px-2">
              <i className="hgi hgi-stroke hgi-laurel-wreath-left-01 text-4xl text-brand"></i>
                <div className="flex flex-col text-center">
                  <span>Guest</span>
                  <span>Favorite</span>
                </div>
              <i className="hgi hgi-stroke hgi-laurel-wreath-right-01 text-4xl text-brand"></i>
            </div>
            <div className="w-full flex justify-center items-center text-center border-e border-brand px-2">
              <span>73<br/>Reviews</span>
            </div>
            <div className="w-full flex flex-col items-center justify-center px-2">
              <span>4.8</span>
              <div className="text-brand flex gap-0.5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>    
          </div>
        </div>
        
        <div className="px-4 py-7 flex flex-col gap-4">
          <h2 className="font-title text-brand text-3xl">About this place</h2>
          <p className={`text-base ${isOpen ? 'line-clamp-none' : 'line-clamp-4'}`} ref={ref}>{listing.description}</p>
          { showButton && (
            <button onClick={() => setIsOpen(!isOpen)} className="btn-primary btn-md w-full">
              {isOpen ? 'Hide' : 'Show more'}
            </button> 
          )}
        </div>

        <div className="mx-4 bg-brand rounded-2xl p-4">
          <h4 className="font-title text-br-background text-2xl">Book your stay</h4>
          <button className="w-full bg-brand-200 text-start rounded-lg p-2 text-brand-800/40">Check in</button>
          <button className="w-full bg-brand-200 text-start rounded-lg p-2 text-brand-800/40">Check out</button>
          <button className="w-full bg-brand-200 text-start rounded-lg p-2 text-brand-800/40">Guests</button>
          
          <button>Start reservation</button>
        </div>
        <div>
          <h3>What this place offers</h3>
          <p>Listing anemities</p>
          <button>Show all features</button>
        </div>
      </div>
        
    </div>
  )
};

export default ListingDetail;