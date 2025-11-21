import { useParams } from "react-router";
import { ReservationDetailsCard } from "../features/reservation/components/ReservationDetailsCard";
import { FaArrowLeft } from "react-icons/fa";
import { PaymentCard } from "../features/reservation/components/PaymentCard";

function Reservation() {
  // Get listing id from params
  const { listing_id } = useParams<{ listing_id: string }>();

  // Handle missing param
  if (!listing_id) return <div>Invalid listing</div>;

  return (
    <div className="px-4">
      <div className="pt-4 flex justify-between lg:hidden">
        <a href={`/listings/${listing_id}`} className="icon-sm btn-secondary bg-br-background!"><FaArrowLeft className="size-full"/></a>     
      </div>
      <h1 className="font-title font-semibold text-brand text-3xl py-4">Review and continue</h1>

      <div>
        <ReservationDetailsCard listing_id={listing_id}/>
        <h3 className="font-title font-semibold text-brand text-2xl pb-4 pt-8">Choose how to pay</h3>
        <PaymentCard />
      </div>

      <button className="btn-primary btn-md w-full my-4">Continue</button>
    </div>
  )
};

export default Reservation;