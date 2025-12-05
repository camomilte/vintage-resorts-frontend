export interface ListingsResponse {
  data: Listing[]
};

export interface ListingResponse {
  data: Listing
};

export interface Listing {
  listing_id: number;
  host_id: number;
  title: string;
  description: string | null;
  address: string;
  city: string | null;
  country: string;
  price_per_night: number;
  reviews: any[] | null;
  max_adults: number;
  max_children: number | null;
  max_infants: number | null;
  max_pets: number | null;
  num_bedrooms: number;
  num_bathrooms: number;
  num_beds: number;
  created_at: Date;
  pets_allowed: boolean;
  images: string[] | null;
};