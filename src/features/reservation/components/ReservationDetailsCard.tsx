import { useListing } from "../../listings/hooks/useListing";
import placeholder from '../../../assets/stock-apartment.jpg'
import { useLocation, useNavigate } from "react-router";
import { calculateTotalPrice } from "../../../utils/calculateTotalPrice";
import { useEffect, useMemo, useRef, useState } from "react";
import { DateModal, GuestsModal, type GuestsCounters } from "../../listings/components/SelectionModals";

interface Props {
  listing_id: string;
  onChange: any
}

export const ReservationDetailsCard = ({ listing_id, onChange }: Props) => {
  // Get reservation state from reservation card
  const { state } = useLocation();

  // Fetch listing and convert id to number
  const { data: listing, isPending, isError, error } = useListing(Number(listing_id));

  // Initialize navigate
  const navigate = useNavigate();



 /*  // Get checkIn and checkOut date and convert to Date objects
  const checkIn = state?.checkIn ? new Date(state.checkIn) : undefined;
  const checkOut = state?.checkOut ? new Date(state.checkOut) : undefined;
  // Extract guests from state 
  const numAdults = state?.guests?.adults.value ?? 0;
  const numChildren = state?.guests?.children.value ?? 0;
  const numInfants = state?.guests?.infants.value ?? 0;
  const numPets = state?.guests?.pets.value ?? 0; */


  // Local editable state initialized from location state
  const [checkIn, setCheckIn] = useState<Date | undefined>(state?.checkIn ? new Date(state.checkIn) : undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(state?.checkOut ? new Date(state.checkOut) : undefined);

  const [checkInModalOpen, setCheckInModalOpen] = useState(false);
  const [checkOutModalOpen, setCheckOutModalOpen] = useState(false);
  const [guestsModalOpen, setGuestsModalOpen] = useState(false);

  const [guestsCounters, setGuestsCounters] = useState<GuestsCounters>({
    adults: { value: state?.guests?.adults.value ?? 0, description: "18 and older" },
    children: { value: state?.guests?.children.value ?? 0, description: "2-17 years old" },
    infants: { value: state?.guests?.infants.value ?? 0, description: "Younger than 2 years old" },
    pets: { value: state?.guests?.pets.value ?? 0, description: "Excluding service animals" }
  });

   const handleIncrement = (key: keyof GuestsCounters) => {
    setGuestsCounters(prev => ({ 
      ...prev, 
      [key]: {
        ...prev[key],
        value: prev[key].value + 1,
      }
    }));
  }

  const handleDecrement = (key: keyof GuestsCounters) => {
    setGuestsCounters(prev => ({ 
      ...prev, 
      [key]: {
        ...prev[key],
        value: Math.max(prev[key].value - 1,0),
      } 
    }));
  }

  // Extract guests values for display/compute
  const numAdults = guestsCounters.adults.value;
  const numChildren = guestsCounters.children.value;
  const numInfants = guestsCounters.infants.value;
  const numPets = guestsCounters.pets.value;
  
  // Call function to calculate total price
  const totalPrice = checkIn && checkOut ? calculateTotalPrice(checkIn, checkOut, listing?.price_per_night) : 0;
  
  // Redirect to not found if listing is missing
  useEffect(() => {
    if (!isPending && !listing) {
      navigate("/not-found");
    }
  }, [isPending, listing, navigate]);
  
  const reservation = useMemo (() => {
    if (!listing) return null;

    return {
      listing_id,
      start_date: checkIn,
      end_date: checkOut,
      num_adults: numAdults,
      num_childern: numChildren,
      num_infants: numInfants,
      num_pets: numPets,
      total_price: totalPrice
    }
  }, [listing_id, listing, checkIn, checkOut, numAdults, numChildren, numInfants, numPets, totalPrice]);

  const prevReservation = useRef(reservation);
  useEffect(() => {
    if(!reservation) return;
    if(JSON.stringify(reservation) === JSON.stringify(prevReservation.current)) return;

    prevReservation.current = reservation;

    onChange(reservation)

  }, [reservation, onChange]);
  
  // Show loading when fetching
  if (isPending) {
    return <p>Loading...</p>
  }

  // Log error
  if (isError) {
    console.error(error)
  }

  return (
    <div className="border border-zinc-800 rounded-2xl p-4">
      <div className="border-b border-zinc-800 flex gap-4 items-center pb-4">
        <img src={placeholder} alt="placeholder apartment image" className="object-cover w-30 h-full rounded-md"/>
  
        <div className="tracking-tight">
          <h2 className="font-bold">{listing?.title}</h2>
          <p className="text-neutral-500">{listing?.num_bedrooms} bedrooms, {listing?.num_bathrooms} bathrooms</p>
          <p className="text-neutral-500">{listing?.price_per_night} SEK per night</p>
        </div>
      </div>

      <div className="flex justify-between items-center py-4 border-b border-zinc-800">
        <div>
          <h3 className="uppercase font-bold">Check in</h3>
          <p className="text-neutral-500">{checkIn ? checkIn.toLocaleDateString() : "Not selected"}</p>
        </div>
        <button className="btn-primary btn-xs" onClick={() => setCheckInModalOpen(true)}>{checkIn? "Change" : "Select"}</button>
      </div>

      <div className="flex justify-between items-center py-4 border-b border-zinc-800">
        <div>
          <h3 className="uppercase font-bold">Check out</h3>
          <p className="text-neutral-500">{checkOut ? checkOut.toLocaleDateString() : "Not selected"}</p>
        </div>
        <button className="btn-primary btn-xs" onClick={() => setCheckOutModalOpen(true)}>{checkOut? "Change" : "Select"}</button>
      </div>

      <div className="flex justify-between items-center py-4 border-b border-zinc-800">
        <div>
          <h3 className="uppercase font-bold">Guests</h3>
          {numAdults > 0 &&(
            <p className="text-neutral-500">{numAdults} adults</p>
          )}
          {numChildren > 0 && (
            <p className="text-neutral-500">{numChildren} children</p>
          )}
          {numInfants > 0 && (
            <p className="text-neutral-500">{numInfants} infants</p>
          )}
          {numPets > 0 && (
            <p className="text-neutral-500">{numPets} pets</p>
          )}
        </div>
        <button className="btn-primary btn-xs" onClick={() => setGuestsModalOpen(true)}>{numAdults? "Change" : "Select"}</button>

      </div>

      <div className="flex justify-between items-center pt-4">
        <div>
          <h3 className="uppercase font-bold">Total price</h3>
          <p className="text-neutral-500">{totalPrice} SEK</p>
        </div>
        <button className="btn-primary btn-xs">Details</button>
      </div>

      {/* Reused modals */}
      <DateModal
        open={checkInModalOpen}
        onClose={() => setCheckInModalOpen(false)}
        title="Select Check-in Date"
        selected={checkIn}
        onSelect={(d) => {
          setCheckIn(d);
          setCheckInModalOpen(false);
        }}
      />

      <DateModal
        open={checkOutModalOpen}
        onClose={() => setCheckOutModalOpen(false)}
        title="Select Check-out Date"
        selected={checkOut}
        onSelect={(d) => {
          setCheckOut(d);
          setCheckOutModalOpen(false);
        }}
      />

      <GuestsModal
        open={guestsModalOpen}
        onClose={() => setGuestsModalOpen(false)}
        guests={guestsCounters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  )
}