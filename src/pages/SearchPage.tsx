import { ListingGrid } from "../features/listings/components/ListingGrid";


function Search() {
  
  return (
    <div className="px-4">
      <h1 className="font-accent text-brand text-4xl text-center py-4">Search results</h1>
      <ListingGrid />
    </div>
  )
}

export default Search;