import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoSearch } from 'react-icons/io5';
import { useUser } from "../features/user/hooks/useUser";

export const StickyNav = () => {
  const { data } = useUser();

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
          <a href={data ? "/profile" : "/auth/login"} className="flex flex-col justify-center items-center">
            <div className='size-9 inline-flex items-center justify-center btn-only pb-1'>
              {data?.profile_picture_url ? (
                <img src={data.profile_picture_url} alt="user profile image" className="rounded-full border-brand-200 border-2"/>
              ) : (
                <FaRegUser className='size-[90%]'/>  
              )} 
            </div>
            <span className="text-xs">{data ? "Profile" : "Log in"}</span>
          </a>

        </div>
      </div>
    </nav>
  )
}

