/* // React
import { createContext, useContext, useState } from "react";
// Types
import type { User, UserContextType } from "../types/userType";

// Create new context for user
const UserContext = createContext<UserContextType | null>(null);

// Define props for user provider 
interface UserProviderProps {
  children: React.ReactNode;
}

// Define and export UserProvider component
export const UserProvider = ({ children }: UserProviderProps) => {
  // State to hold user, initially null
  const [user, setUser] = useState<User | null>(null);

  // Provide user state to all child components
  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>  )
}

// Hook to use UserContext in components
export const useUserContext = () => {
  // Acces context
  const ctx = useContext(UserContext);

  // Throw error if context is used outside provider
  if(!ctx) throw new Error("useUserContext must be used inside a UserProvider");

  // Return context
  return ctx;
} */