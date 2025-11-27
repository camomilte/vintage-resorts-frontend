import { FaChevronRight } from 'react-icons/fa';
import { ListingGroup } from '../features/listings/components/ListingGroup';

function Home() {
 
  return (
    <>
      <div className="my-4">
        <h1 className="mx-4 font-accent text-brand text-4xl desktop:text-6xl capitalize desktop:py-5 text-center">Stay in an era you love</h1>

        <section>
          <div className='my-2 mx-4'>
            <a href="/" className='flex items-baseline gap-2'>
              <h2 className="font-title text-2xl desktop:text-4xl">Recomended</h2>
              <FaChevronRight className='size-5 desktop:size-6'/>
            </a>
          </div>
          <ListingGroup />
        </section>
        <section>
          <div className='my-2 mx-4'>
            <a href="/" className='flex items-baseline gap-2'>
              <h2 className="font-title text-2xl desktop:text-4xl capitalize">Sleep like it's the 18th century</h2>
              <FaChevronRight className='size-5 desktop:size-6'/>
            </a>
          </div>
          <ListingGroup />
        </section>
        <section>
          <div className='my-2 mx-4'>
            <a href="/" className='flex items-baseline gap-2'>
              <h2 className="font-title text-2xl desktop:text-4xl capitalize">Apartments in Great Brittain</h2>
              <FaChevronRight className='size-5 desktop:size-6'/>
            </a>
          </div>
          <ListingGroup />
        </section>
        
      </div>
    </>
  )
};

export default Home;