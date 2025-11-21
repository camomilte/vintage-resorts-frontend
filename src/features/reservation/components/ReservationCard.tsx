import { useState } from "react"
import { Modal } from "../../../components/Modal";
import { DayPicker } from "react-day-picker";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router";

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

  const [guestsCounters, setGuestsCounters] = useState({
    adults: { value: 1, description: "18 and older" },
    children: { value: 0, description: "2-17 years old" },
    infants: { value: 0, description: "Younger than 2 years old" },
    pets: { value: 0, description: "Excluding service animals" }
  });

  const handleIncrement = (key: keyof typeof guestsCounters) => {
    setGuestsCounters(prev => ({ 
      ...prev, 
      [key]: {
        ...prev[key],
        value: prev[key].value + 1,
      }
    }));
  }

  const handleDecrement = (key: keyof typeof guestsCounters) => {
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
        <Modal open={checkInModalOpen} onClose={() => setCheckInModalOpen(false)}>
          <h3 className="text-3xl font-title font-semibold text-brand">Select Check-in Date</h3>

          <div className="flex justify-center">
            <DayPicker
              animate
              mode="single"
              navLayout="around"
              selected={checkIn}
              onSelect={setCheckIn}
              footer={
                checkIn ? `Selected: ${checkIn.toLocaleDateString()}` : "Pick a day."
              }
            />
          </div>
        </Modal>

        {/* Check out button */}
        <button 
          onClick={() => setCheckOutModalOpen(true)}
          className="w-full bg-brand-200 text-start rounded-lg p-2.5 text-brand-700"
        >
          {checkOut ? checkOut.toLocaleDateString() : "Check out"}
        </button>

        {/* Check out modal */}
        <Modal open={checkOutModalOpen} onClose={() => setCheckOutModalOpen(false)}>
          <h3 className="text-3xl font-title font-semibold text-brand">Select Check-out Date</h3>

          <div className="flex justify-center">
            <DayPicker
              animate
              mode="single"
              navLayout="around"
              selected={checkOut}
              onSelect={setCheckOut}
              footer={
                checkOut ? `Selected: ${checkOut.toLocaleDateString()}` : "Pick a day."
              }
            />
          </div>
        </Modal>
        
        {/* Guests button */}
        <button 
          onClick={() => setGuestsModalOpen(true)}
          className="w-full bg-brand-200 text-start rounded-lg p-2.5 text-brand-800"
        >
          Guests
        </button>

        {/* Guests modal */}
        <Modal open={guestsModalOpen} onClose={() => setGuestsModalOpen(false)}>
          <h3 className="text-3xl font-title font-semibold text-brand">Select Guests</h3>

          <form className="py-4">
            {Object.keys(guestsCounters).map(key => {
              const counter = guestsCounters[key as keyof typeof guestsCounters]
              return (
                <div key={key} className="flex justify-between items-center py-4">
                  <div>
                    <label htmlFor={key} className="font-bold capitalize">{key}</label>
                    <p className="text-neutral-500">{counter.description}</p>

                  </div>
                  <div className="flex items-center py-2">
                    <button
                      type="button"
                      onClick={() => handleDecrement(key as keyof typeof guestsCounters)}
                      className="icon-sm size-8! btn-secondary"
                    >
                      <FaMinus />
                    </button>

                    <input 
                      id={key}
                      type="number"
                      readOnly
                      value={counter.value}
                      className="text-center max-w-14" 
                    />

                    <button
                      type="button"
                      onClick={() => handleIncrement(key as keyof typeof guestsCounters)}
                      className="icon-sm size-8! btn-secondary"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              )
                
            })}
          </form>
        </Modal>

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