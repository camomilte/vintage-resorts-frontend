
export interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  bio: string | null;
  profile_picture_url: string | null;
  date_of_birth: Date;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginRes {
  token: string;
  user: {
    user_id: number;
  }
}