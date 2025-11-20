import { FaRegUser } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"
import { useUser } from "../features/user/hooks/useUser"

export const CompactNav = () => {
  // Fetch user
  const { data } = useUser();
  
  return (
    <nav className="hidden lg:flex justify-between px-24 py-4 border-b border-zinc-800">
      <a href="/">
        <div className='font-accent flex flex-col text-brand text-xl'>
          <span>Vintage</span>
          <span>Resorts</span>
        </div>
      </a>

      <div className="flex items-center gap-4">
        <a href={data ? "/profile" : "/auth/login"}>
            {data?.profile_picture_url ? (
              <img src={data.profile_picture_url} alt="user profile image" className='size-11 rounded-full border-2 border-brand'/>
            ) : (
              <span className='btn-primary icon-md'>
                <FaRegUser className='size-full'/>
              </span>
            )}
          </a>
        <span className='btn-secondary icon-md'>
          <FiMenu className='size-full'/>
        </span>
      </div>
    </nav>
  )
}