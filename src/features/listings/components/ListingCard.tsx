import { useNavigate } from 'react-router';
import placeholder from '../../../assets/stock-apartment.jpg';
import type { Listing } from '../types';
import { IoPaw } from 'react-icons/io5';

interface ListingCardProps {
  listing: Listing;
}


export const ListingCard = ({ listing }: ListingCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/listings/${listing.listing_id}`);
  }

  return (
    <div onClick={handleClick} className='min-w-40 desktop:min-w-sm cursor-pointer'>
      {listing.images? (
        <img src={listing.images[0]} alt="listing image" className='rounded-lg object-cover w-full h-30'/>
      ) : (
        <img src={placeholder} alt="listing image" className='rounded-lg object-cover w-full h-30'/>
      )

      }
    
      <div className='py-3'>
        <h3 className='font-bold text-base pb-1 desktop:text-xl capitalize'>{listing.title}</h3>
        <div className='flex flex-col text-xs desktop:text-base text-neutral-400 gap-1'>
          <span>Located in {listing.country}</span>
          <span>{listing.price_per_night} SEK per night</span>
          {listing.pets_allowed && <span className='flex gap-2'>Pets allowed <IoPaw/></span>}
        </div>

      </div>
    </div>
  )
}; 