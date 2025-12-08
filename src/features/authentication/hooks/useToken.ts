import { useEffect, useState } from "react"

// Hook to check authentication token
export const useToken = () => {
  // State that holds token
  const [token, setToken] = useState<string | null>(null);
  // Loadingstate
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect that runs once component mounts
  useEffect(() => {
    // Read and set token from localStorage
    setToken(localStorage.getItem("token"));
    // Set loading to false
    setIsLoading(false);
  }, []);

  // Listen for changes to token in other tabs
  useEffect(() => {
    // Function to read token from localStorage, triggered by change
    const handleStorage = () => {
      setToken(localStorage.getItem("token"));
    };
    // Listener that reads for change in localstorage
    window.addEventListener("storage", handleStorage);

    // Remove listener when component unmounts
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Boolean indicating if user is logged in or not
  const isAuthenticated = !!token;

  // Return token and logged in status
  return { token, isAuthenticated, isLoading }
}