import React, { useState } from "react";
import { BiSearch } from "react-icons/bi"
import { useNavigate } from "react-router"
import { Modal } from "../../../components/Modal";
import { FaClockRotateLeft, FaKitchenSet, FaLocationDot } from "react-icons/fa6";
import { useEras } from "../hooks/useEras";
import { useAmenities } from "../hooks/useAmenities";
import { useLocations } from "../hooks/useLocations";
import { useFilteredListings } from "../hooks/useFilteredListings";
import { QueryClient, useQueryClient } from "@tanstack/react-query";


const SearchModal = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();


  // Boolean state to hold if modal is open or closed
  const [modalOpen, setModalOpen] = useState(false);
  // State to hold location
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  // State to hold amenities
  const [selectedAmenities, setSelectedAmenities] = useState<number[]>([]);
  // State to hold eras
  const [selectedEras, setSelectedEras] = useState<number[]>([]);

  // Get locations from backend
  const { data: locations } = useLocations();
  // Get amenities from backend
  const { data: amenities } = useAmenities();
  // Get eras from backend
  const { data: eras } = useEras();

  // Get Filter logic
  const { mutate } = useFilteredListings();

  // Deduplicate locations data
  const uniqueLocation = Array.from(
    new Map(locations?.map(loc => [loc.city, loc])).values()
  );

  function handleToggle<T>(value: T, setter: React.Dispatch<React.SetStateAction<T[]>>) {
    setter(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const handleSearch = () => {
    const selectedFilters = {
      locations: selectedLocations,
      amenities: selectedAmenities,
      eras: selectedEras,
    }

    mutate(selectedFilters, {
      onSuccess: (data) => {
        // Store fetched listings in cache
        queryClient.setQueryData(["filteredListings"], data)
        navigate("/search");
        setModalOpen(false)
      }
    })
  };



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
        <section aria-label="location filter section" className="bg-br-background rounded-2xl p-4 my-4">
          <h2 className="text-brand text-3xl font-title font-semibold capitalize pb-4">Location</h2>
          {uniqueLocation.map((loc, index) => {
            return (
              <div key={index} className="flex items-center justify-between my-3">
                <div className="flex gap-2 items-center"> 
                  <div className="bg-brand/20 p-3 rounded-lg w-fit">
                    <FaLocationDot className="size-6"/>
                  </div>
                  <label htmlFor={loc.city}>{loc.city}, {loc.country}</label>

                </div>
                <input
                  type="checkbox"
                  id={loc.city}
                  value={loc.city}
                  checked={selectedLocations.includes(loc.city)}
                  onChange={() => handleToggle(loc.city, setSelectedLocations)}
                />
              </div>
            )
          })}
        </section>

        <section aria-label="amenities filter section" className="bg-br-background rounded-2xl p-4 my-4">
          <h2 className="text-brand text-3xl font-title font-semibold capitalize pb-4">amenities</h2>
    
          {amenities?.map(a => (
            <div key={a.amenity_id} className="flex items-center justify-between my-3">
              <div className="flex gap-2 items-center">
                <div className="bg-brand/20 p-3 rounded-lg w-fit">
                  <FaKitchenSet className="size-6"/>
                </div>
                <label htmlFor={a.amenity_name}>{a.amenity_name}</label>
              </div>
              <input
                type="checkbox"
                id={a.amenity_name}
                checked={selectedAmenities.includes(a.amenity_id)}
                onChange={() => handleToggle(a.amenity_id, setSelectedAmenities)}
              />
            </div>
          ))}
        </section>

        <section aria-label="amenities filter section" className="bg-br-background rounded-2xl p-4 my-4">
          <h2 className="text-brand text-3xl font-title font-semibold capitalize pb-4">Era</h2>
          {eras?.map(era => (
            <div key={era.amenity_id} className="flex items-center justify-between my-3">
              <div className="flex gap-2 items-center">
                <div className="bg-brand/20 p-3 rounded-lg w-fit">
                  <FaClockRotateLeft className="size-6"/>
                </div>
              <label htmlFor={era.amenity_name}>{era.amenity_name}</label>
            </div>
              <input
                type="checkbox"
                id={era.amenity_name}
                checked={selectedEras.includes(era.amenity_id)}
                onChange={() => handleToggle(era.amenity_id, setSelectedEras)}
              />
            </div>
          ))}
        </section>

        <button 
          onClick={handleSearch}
          className="btn-primary btn-lg w-full mb-5"
        >
          Search
        </button>
      </Modal>

    </>
    
  )
}

export default SearchModal
