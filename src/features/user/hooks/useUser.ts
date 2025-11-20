import { useQuery } from "@tanstack/react-query"
import type { User } from "../types/userType"
import { useToken } from "../../authentication/hooks/useToken";
import { getCurrentUser } from "../services/userService";

export const useUser = () => {
  // Get current token
  const { token } = useToken();

  return useQuery<User>({
    queryKey:["user"],
    queryFn: () => getCurrentUser(token!),
    enabled: !!token
  });
};