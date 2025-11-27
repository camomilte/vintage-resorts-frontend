export interface Guests {
  adults: { 
    value: number; 
    description: string
  };
  children: { 
    value: number; 
    description: string
  };
  infants: { 
    value: number; 
    description: string
  };
  pets: { 
    value: number; 
    description: string
  };
}

export interface ReservationState {
  checkIn?: Date;
  checkOut?: Date;
  guests?: Guests;
}

export type statusTypes = 'pending' | 'cancelled' | 'confirmed' | 'completed';

export interface Reservation {
  reservation_id: number;
  guest_id: number;
  start_date: Date;
  end_date: Date;
  num_adults: number;
  num_children: number;
  num_infants: number;
  num_pets: number;
  total_price: number;
  status: statusTypes;
  created_at: Date;
}

export interface ReservationPayload {
  listing_id: number;
  start_date: Date | undefined;
  end_date: Date | undefined;
  num_adults: number,
  num_children: number,
  num_infants: number,
  num_pets: number,
  total_price: number;
}