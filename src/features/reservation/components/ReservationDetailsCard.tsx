import { useListing } from "../../listings/hooks/useListing";
import placeholder from '../../../assets/stock-apartment.jpg'
import { useLocation, useNavigate } from "react-router";
import { calculateTotalPrice } from "../../../utils/calculateTotalPrice";
import { useEffect } from "react";

interface Props {
  listing_id: string;
}

export const ReservationDetailsCard = ({listing_id}: Props) => {
  // Fetch listing and convert id to number
  const { data: listing, isPending, isError, error } = useListing(Number(listing_id));

  // Initialize navigate
  const navigate = useNavigate();
  
  // Get reservation state from reservation card
  const { state } = useLocation();

  // Redirect to not found if listing is mmissing
  useEffect(() => {
    if (!isPending && !listing) {
      navigate("/not-found");
    }
  }, [isPending, listing, navigate]);

  // Show loading when fetching
  if (isPending) {
    return <p>Loading...</p>
  }

  // Log error
  if (isError) {
    console.error(error)
  }

  // Get checkIn and checkOut date and convert to Date objects
  const checkIn = state?.checkIn ? new Date(state.checkIn) : undefined;
  const checkOut = state?.checkOut ? new Date(state.checkOut) : undefined;
  // Extract guests from state 
  const guests = state?.guests;
  
  // Call function to calculate total price
  const totalPrice = checkIn && checkOut ? calculateTotalPrice(checkIn, checkOut, listing?.price_per_night) : 0;

  return (
    <div className="border border-zinc-800 rounded-2xl p-4">
      <div className="border-b border-zinc-800 flex gap-4 items-center pb-4">
        <img src={placeholder} alt="placeholder apartment image" className="object-cover w-30 h-full rounded-md"/>
  
        <div className="tracking-tight">
          <h2 className="font-bold">{listing?.title}</h2>
          <p className="text-neutral-500">{listing?.num_bedrooms} bedrooms, {listing?.num_bathrooms} bathrooms</p>
        </div>
      </div>

      <div className="flex justify-between items-center py-4 border-b border-zinc-800">
        <div>
          <h3 className="uppercase font-bold">Check in</h3>
          <p className="text-neutral-500">{checkIn ? checkIn.toLocaleDateString() : "Not selected"}</p>
        </div>
        <button className="btn-primary btn-xs">{checkIn? "Change" : "Select"}</button>
      </div>

      <div className="flex justify-between items-center py-4 border-b border-zinc-800">
        <div>
          <h3 className="uppercase font-bold">Check out</h3>
          <p className="text-neutral-500">{checkOut ? checkOut.toLocaleDateString() : "Not selected"}</p>
        </div>
        <button className="btn-primary btn-xs">{checkOut? "Change" : "Select"}</button>
      </div>

      <div className="flex justify-between items-center py-4 border-b border-zinc-800">
        <div>
          <h3 className="uppercase font-bold">Guests</h3>
          {guests?.adults.value > 0 &&(
            <p className="text-neutral-500">{guests.adults.value} adults</p>
          )}
          {guests?.children.value > 0 && (
            <p className="text-neutral-500">{guests.children.value} children</p>
          )}
          {guests?.infants.value > 0 && (
            <p className="text-neutral-500">{guests.infants.value} infants</p>
          )}
          {guests?.pets.value > 0 && (
            <p className="text-neutral-500">{guests.pets.value} pets</p>
          )}
        </div>
        <button className="btn-primary btn-xs">{guests? "Change" : "Select"}</button>

      </div>

      <div className="flex justify-between items-center pt-4">
        <div>
          <h3 className="uppercase font-bold">Total price</h3>
          <p className="text-neutral-500">{totalPrice} SEK</p>
        </div>
        <button className="btn-primary btn-xs">Details</button>
      </div>
    </div>
  )
}