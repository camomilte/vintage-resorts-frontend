export interface AmentiesResponse {
  data: Amenity[]
};

export interface Amenity {
  amenity_id: number;
  amenity_name: string;
  description: string | null;
}