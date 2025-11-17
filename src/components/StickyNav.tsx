import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoSearch } from 'react-icons/io5';

export const StickyNav = () => {
  return (
    <nav className="bg-br-background w-full px-4 fixed bottom-0 end-0 z-20 border-t border-zinc-800 lg:hidden">
      <div className="max-w-60 mx-auto py-4">
        <div className="flex justify-between">
          <a href="/" className="flex flex-col justify-center items-center">
            <div className='size-9 inline-flex items-center justify-center btn-only pb-1'>
              <IoSearch className='size-full' />
            </div>
            <span className="text-xs">Search</span>
          </a>
          <a href="" className="flex flex-col justify-center items-center">
            <div className='size-9 inline-flex items-center justify-center btn-only pb-1'>
              <FaRegHeart className='size-[90%]' />
            </div>
            <span className="text-xs">Favorites</span>  
          </a>
          <a href="" className="flex flex-col justify-center items-center">
            <div className='size-9 inline-flex items-center justify-center btn-only pb-1'>
              <FaRegUser className='size-[90%]'/>  
            </div>
            <span className="text-xs">Username</span>
          </a>

        </div>
      </div>
    </nav>
  )
}

