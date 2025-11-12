import { FaRegUser } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"

export const CompactNav = () => {
  
  return (
    <nav className="hidden lg:flex justify-between px-24 py-4 border-b border-zinc-800">
      <a href="/">
        <div className='font-accent flex flex-col text-brand text-xl'>
          <span>Vintage</span>
          <span>Resorts</span>
        </div>
      </a>

      <div className="flex items-center gap-4">
        <span className='btn-primary icon-md'>
          <FaRegUser className='size-full'/>
        </span>
        <span className='btn-secondary icon-md'>
          <FiMenu className='size-full'/>
        </span>
      </div>
    </nav>
  )
}