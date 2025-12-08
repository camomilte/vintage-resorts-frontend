import { useNavigate, useParams } from "react-router";
import { ReservationDetailsCard } from "../features/reservation/components/ReservationDetailsCard";
import { FaArrowLeft } from "react-icons/fa";
import { PaymentCard } from "../features/reservation/components/PaymentCard";
import { useCreateReservation } from "../features/reservation/hooks/useCreateReservation";
import { useUser } from "../features/user/hooks/useUser";
import { useState } from "react";

function Reservation() {
  const navigate = useNavigate();

  // Get listing id from params
  const { listing_id } = useParams<{ listing_id: string }>();

  // Get user
  const { data: user } = useUser();
  // State to handle all reservation data 
  const [reservationData, setReservationData] = useState<any>(null);

  const [paymentMethod, setPaymentMethod] = useState(null);

  // Handle missing param
  if (!listing_id) return <div>Invalid listing</div>;

  const { mutate: createReservation, isPending } = useCreateReservation(user?.user_id ?? 0);

  // Handle submission
  const handleSubmit = () => {
    if(!reservationData) return;
    createReservation({ ...reservationData, payment_method: paymentMethod });
    navigate(`/listings/${listing_id}/reservations/booked`);
  };



  return (
    <div className="px-4 max-w-xl mx-auto">
      <div className="pt-4 flex justify-between lg:hidden">
        <a href={`/listings/${listing_id}`} className="icon-sm btn-secondary bg-br-background!"><FaArrowLeft className="size-full"/></a>     
      </div> 
      <h1 className="font-title font-semibold text-brand text-3xl py-4">Review and continue</h1>

      <div>
        <ReservationDetailsCard 
          listing_id={listing_id} 
          onChange={setReservationData}
        />
        <h3 className="font-title font-semibold text-brand text-2xl pb-4 pt-8">Choose how to pay</h3>
        <PaymentCard 
          onChange={setPaymentMethod}
        />
      </div>

      <button 
        onClick={handleSubmit}
        disabled={isPending}
        className="btn-primary btn-md w-full my-4"
      >
        Continue
      </button>
    </div>
  )
};

export default Reservation;