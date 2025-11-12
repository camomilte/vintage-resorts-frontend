import { BiSearch } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  return (
    <nav>
      {/* Search bar/button small screen */}
      <div className='lg:hidden py-4 mx-4 tablet:mx-6'>
        <button className="bg-zinc-800 flex text-zinc-600 rounded-full w-full py-5 justify-center">
          <div className='flex gap-2 items-center'>
            <BiSearch /> 
            <p className='text-base'>Start your search</p>
          </div>
        </button>
      </div>

      {/* Search bar desktop */}
      <div className='hidden lg:flex lg:justify-between mx-6 desktop:mx-24 py-4'>
        <div className='font-accent flex flex-col text-brand text-xl'>
          <span>Vintage</span>
          <span>Resorts</span>
        </div>
        <div className='bg-zinc-800 w-2xl rounded-full p-2 flex items-center gap-2 h-fit'>
          <div className='flex w-full h-full justify-between text-brand-200 text-sm'>
            <button className='w-full btn-only rounded-s-full h-full'>
              Where
            </button>
      
            <button className='w-full border-s btn-only'>
              When
            </button>

            <button className='w-full border-s btn-only'>
              Era
            </button>
    
            <button className='w-full border-s btn-only rounded-e-full'>
              Who
            </button>
          </div>
          <button className='flex items-center gap-2 btn-primary rounded-full py-2 px-5 text-sm'>Search<BiSearch /> </button>

        </div>
        <div className='flex gap-4'>
          <span className='btn-primary icon-md'>
            <FaRegUser className='size-full'/>
          </span>
          <span className='btn-secondary icon-md'>
            <FiMenu className='size-full'/>
          </span>
        </div>
      </div>
      

      <div className='text-sm border-b border-zinc-800 lg:mt-3'>
        <ul className='flex flex-wrap max-w-sm justify-center mx-auto'>
          <li className="me-2">
            <a href="#" className="inline-block pb-2 px-4 text-brand font-bold border-b-4 border-brand active " aria-current="page">Rooms</a>
          </li>
          <li className='me-2'>
            <a href="#" className='inline-block pb-2 px-4 border-b-2 border-transparent text-brand'>Experiences</a>
          </li>
          <li className='me-2'>
            <a href="#" className='inline-block pb-2 px-4  border-b-2 border-transparent text-brand'>Services</a>
          </li>
          
        </ul>
      </div>

    </nav>
  )
};