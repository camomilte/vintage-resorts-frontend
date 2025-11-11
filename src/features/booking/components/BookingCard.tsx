import { useState } from "react"
import { Modal } from "../../../components/Modal";
import { DayPicker } from "react-day-picker";
import { FaMinus, FaPlus } from "react-icons/fa6";



export const BookingCard = () => {
  const [checkInModalOpen, setCheckInModalOpen] = useState(false);
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);

  const [checkOutModalOpen, setCheckOutModalOpen] = useState(false);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);

  const [guestsModalOpen, setGuestsModalOpen] = useState(false);
  const [guests, setGuests] = useState<[] | undefined>(undefined);

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

          <form>
            <label htmlFor="adults">Adults</label>
            <div>
              <button>
                <FaMinus />
              </button>
              <input type="number" value={1}/>
              <button>
                <FaPlus />
              </button>
            </div>
          </form>


        </Modal>
        
        <a href="#">
          <span className="btn-light-primary btn-md w-full">Start reservation</span>
        </a>
      </div>
    </div>
  )
}