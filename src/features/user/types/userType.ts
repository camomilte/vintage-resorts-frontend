export interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  bio: string | null;
  profile_picture_url: string | null;
  reviews: any[] | null;
  created_at: Date;
  role: string;
  date_of_birth: Date;
}
/* 
export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}; */