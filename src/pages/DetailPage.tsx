import { useParams } from "react-router";
import { useListing } from "../features/listings/hooks/useListing.ts";

function ListingDetail() {
  const { listing_id } = useParams<{ listing_id: string }>();
  const listingId = Number(listing_id);
  const { data: listing, isLoading, isError, error } = useListing(listingId);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <span>Error: {error.message}</span>

  if (!listing) return null;

  return (
    <>
      <h1>{listing.title}</h1>
      <span>Room in {listing.city}, {listing.country}</span>
      <span>{listing.num_bedrooms} beds, {listing.num_bathrooms} bathrooms</span>
      <div>
        <span>Guest favoirite</span>
        <span>73 reviews</span>
        <span>4.8 stars</span>
      </div>
      <div>
        <h2>About this place</h2>
        <p>{listing.description}</p>
        <button>Show more</button>
      </div>
      <div>
        <h4>Book your stay</h4>
        <input type="text" placeholder="enter dates"/>
        <input type="text" placeholder="enter dates"/>
        <input type="text" placeholder="enter dates"/>
        <button>Start reservation</button>
      </div>
      <div>
        <h3>What this place offers</h3>
        <p>Listing anemities</p>
        <button>Show all features</button>
      </div>
      <div>
        <h3>Check in date</h3>
        <p>--Date picker here--</p>
      </div>
    </>
  )
};

export default ListingDetail;