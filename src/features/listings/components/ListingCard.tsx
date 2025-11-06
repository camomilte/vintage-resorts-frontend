import placeholder from '../../../assets/stock-apartment.jpg';
import type { Listing } from '../types';
import { IoPaw } from 'react-icons/io5';

  interface ListingCardProps {
    listing: Listing;
  }
  

export const ListingCard = ({ listing }: ListingCardProps) => {

  return (
    <div className='min-w-1/2 desktop:min-w-sm'>
      <a href='#'>
        <img src={placeholder} alt="listing image" className='rounded-lg'/>
      
        <div className='py-3'>
          <h3 className='font-bold text-base pb-1 desktop:text-xl'>{listing.title}</h3>
          <div className='flex flex-col text-xs desktop:text-base text-neutral-400 gap-1'>
            <span>Located in {listing.country}</span>
            <span>{listing.price_per_night} SEK per night</span>
            {listing.pets_allowed && <span className='flex gap-2'>Pets allowed <IoPaw/></span>}
          </div>

        </div>
      </a>
    </div>
  )
}; 