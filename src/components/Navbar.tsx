import { BiSearch } from 'react-icons/bi';

export default function Navbar() {
  return (
    <nav>
      <button className="bg-zinc-800 flex text-zinc-600 rounded-full w-full py-5 justify-center my-4">
        <div className='flex gap-2 items-center'>
          <BiSearch /> 
          <p className='text-base'>Start your search</p>
        </div>
      </button>
      <div className='text-sm border-b border-zinc-800'>
        <ul className='flex flex-wrap -mb-px justify-between'>
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