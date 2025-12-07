import { useState } from "react"
import { useNavigate } from "react-router";
import { DateModal, GuestsModal, type GuestsCounters } from "../../listings/components/SelectionModals";

//TODO: Check so start day cannot be before today and end day cannot be before start day

//TODO: Change button to set guests


export const BookingCard = () => {
  // Initialize navigate
  const navigate = useNavigate();

  const [checkInModalOpen, setCheckInModalOpen] = useState(false);
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);

  const [checkOutModalOpen, setCheckOutModalOpen] = useState(false);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);

  const [guestsModalOpen, setGuestsModalOpen] = useState(false);

  const [guestsCounters, setGuestsCounters] = useState<GuestsCounters>({
    adults: { value: 1, description: "18 and older" },
    children: { value: 0, description: "2-17 years old" },
    infants: { value: 0, description: "Younger than 2 years old" },
    pets: { value: 0, description: "Excluding service animals" }
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



  return (
    <div>
      <div className="my-7 bg-brand rounded-2xl p-4 flex flex-col gap-4">
        <h4 className="font-title text-br-background text-2xl font-semibold lg:text-4xl">Book your stay</h4>

        {/* Check in button */}
        <button 
          onClick={() => setCheckInModalOpen(true)}
          className="w-full bg-brand-200 text-start rounded-lg p-2.5 text-brand-700"
        >
          {checkIn ? checkIn.toLocaleDateString() : "Check in"}
        </button>

        {/* Check in modal */}
        <DateModal
          open={checkInModalOpen}
          onClose={() => setCheckInModalOpen(false)}
          title="Select Check-in Date"
          selected={checkIn}
          onSelect={setCheckIn}
        />

        {/* Check out button */}
        <button 
          onClick={() => setCheckOutModalOpen(true)}
          className="w-full bg-brand-200 text-start rounded-lg p-2.5 text-brand-700"
        >
          {checkOut ? checkOut.toLocaleDateString() : "Check out"}
        </button>

        {/* Check out modal */}
        <DateModal
          open={checkOutModalOpen}
          onClose={() => setCheckOutModalOpen(false)}
          title="Select Check-out Date"
          selected={checkOut}
          onSelect={setCheckOut}
        />
        
        {/* Guests button */}
        <button 
          onClick={() => setGuestsModalOpen(true)}
          className="w-full bg-brand-200 text-start rounded-lg p-2.5 text-brand-800"
        >
          Guests
        </button>

        {/* Guests modal */}
        <GuestsModal
          open={guestsModalOpen}
          onClose={() => setGuestsModalOpen(false)}
          guests={guestsCounters}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />

        <button 
          className="btn-light-primary btn-md w-full"
          onClick={() => 
            navigate("reservations/new", {
              state: {
                checkIn,
                checkOut,
                guests: guestsCounters
              },
            })
          }>
          Start reservation
        </button>
      </div>
    </div>
  )
}