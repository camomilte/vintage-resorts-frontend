import { useState } from "react";
import { BiSearch } from "react-icons/bi"
import { useNavigate } from "react-router"
import { Modal } from "../../../components/Modal";


const SearchModal = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);


  return (
    <>
      <button 
        onClick={() => setModalOpen(true)}
        className="bg-zinc-800 flex text-zinc-600 rounded-full w-full py-5 justify-center"
      >
        <div className='flex gap-2 items-center'>
          <BiSearch /> 
          <p className='text-base'>Start your search</p>
        </div>
      </button>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <section aria-label="location search section" className="bg-br-background rounded-2xl p-4 my-4">
          <h2 className="text-brand">where</h2>
        </section>

      </Modal>

    </>
    
  )
}

export default SearchModal
