import { useParams } from "react-router";
import placeholder from '../assets/stock-apartment.jpg'
import { useListing } from "../features/listings/hooks/useListing.ts";
import { FaStar, FaWifi, FaTv } from 'react-icons/fa';
import { FaRegHeart, FaArrowLeft, FaKitchenSet } from "react-icons/fa6";
import { IoShareSocialOutline, IoPaw } from "react-icons/io5";
import { PiWashingMachine, PiHairDryer } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import { BookingCard } from "../features/booking/components/BookingCard.tsx";

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
      <div className="relative -mb-14 px-4 pt-4 flex justify-between lg:hidden">
        <a href="/" className="icon-sm btn-secondary bg-br-background!"><FaArrowLeft className="size-full"/></a>
        <div className="flex gap-2">
          <button className="icon-sm btn-primary shadow-xl"><IoShareSocialOutline className="size-full"/></button>
          <button className="icon-sm btn-primary shadow-xl"><FaRegHeart className="size-full"/></button>
        </div>
      </div>

      <div className="px-24 pt-4 hidden lg:flex justify-between">
        <a href="/" className="btn-md btn-secondary">
          <FaArrowLeft className="size-4 me-2"/>
          <span>Back to search</span>
        </a>
        <div className="flex gap-4">
          <button className="btn-md btn-secondary">
            <IoShareSocialOutline className="size-4 me-2"/>
            <span>Share</span>
          </button>
          <button className="btn-md btn-secondary">
            <FaRegHeart className="size-4 me-2"/>
            <span>Save</span>
          </button>
        </div>
      </div>


      <div className="lg:px-24">
        <h1 className="font-accent text-5xl hidden lg:block py-7">{listing.title}</h1>

        <div className="h-[400px] w-full">
          <img src={placeholder} alt="apartment image" className="size-full object-cover lg:rounded-2xl"/>
        </div>

        <div className="rounded-t-3xl bg-br-background -mt-10 relative lg:mt-0 lg:grid lg:grid-cols-3 lg:grid-rows-[auto, 1fr]">

          <div className="flex flex-col lg:flex-row gap-4 lg:self-start border-b lg:border-none py-7 border-zinc-800 px-4 lg:px-0 lg:col-span-4 lg:row-start-1 lg:row-end-2">
            <h1 className="font-accent text-4xl text-center lg:hidden">{listing.title}</h1>
            <div className="text-neutral-400 flex flex-col text-center lg:text-start gap-1 lg:flex-2">
              <span>Room in {listing.city}, {listing.country}</span>
              <span>{listing.num_bedrooms} beds, {listing.num_bathrooms} bathrooms</span>
            </div>

            <div className="flex text-sm pt-3 lg:border lg:border-zinc-700 lg:rounded-xl lg:p-4 lg:max-h-20 lg:flex-2">
              <div className="flex w-full border-e border-brand px-2 items-center justify-center">
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
                <div className="text-brand flex flex-wrap gap-0.5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>    
            </div>
          </div>
          
          <div className="px-4 my-7 flex flex-col gap-4 lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:px-0 lg:pe-5">
            <h2 className="font-title text-brand text-3xl lg:text-5xl font-semibold">About this place</h2>
            <p className={`text-base max-w-4xl ${isOpen ? 'line-clamp-none' : 'line-clamp-4'}`} ref={ref}>{listing.description}</p>
            { showButton && (
              <button onClick={() => setIsOpen(!isOpen)} className="btn-primary btn-md w-full lg:w-fit">
                {isOpen ? 'Hide' : 'Show more'}
              </button> 
            )}
          </div>
          
          <div className="px-4 lg:px-0 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3">
            <BookingCard />
          </div>
          
          <div className="px-4 my-7 lg:px-0 lg:col-span-3">
            <h3 className="font-title text-brand font-semibold text-3xl lg:text-5xl">What this place offers</h3>
            <div className="grid grid-col-1 gap-4 my-4 lg:grid-cols-2 lg:grid-flow-col">
              <div className="flex items-center gap-4 lg:col-1">
                <FaWifi className="text-brand size-8"/>
                <span>Wifi</span>
              </div>
              <div className="flex items-center gap-4 lg:col-1">
                <FaKitchenSet className="text-brand size-8"/>
                <span>Kitchen</span>
              </div>
              <div className="flex items-center gap-4 lg:col-1">
                <IoPaw className="text-brand size-8"/>
                <span>Pets allowed</span>
              </div>
              <div className="flex items-center gap-4 lg:col-2">
                <PiWashingMachine className="text-brand size-8"/>
                <span>Washing machine</span>
              </div>
              <div className="flex items-center gap-4">
                <PiHairDryer className="text-brand size-8"/>
                <span>Hair dryer</span>
              </div>
              <div className="flex items-center gap-4">
                <FaTv className="text-brand size-8"/>
                <span>TV</span>
              </div>
            </div>
            <button className="btn-md btn-primary w-full lg:w-auto" disabled>Show all features</button>
          </div>
        </div>
        <div>
          Date picker will go here
        </div>
        <div>
          Map will go here
        </div>
      </div>
        
    </div>
  )
};

export default ListingDetail;