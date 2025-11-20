import { useMutation } from "@tanstack/react-query"
import type { RegisterData } from "../types"
import { registerUser } from "../services/registerService"
import type { User } from "../../user/types/userType"

export const useRegister = () => {
  return useMutation<User, Error, RegisterData>({
    mutationFn: registerUser
  })
}