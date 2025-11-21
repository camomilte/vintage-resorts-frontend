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