import { useMutation } from "@tanstack/react-query"
import type { RegisterData, User } from "../types"
import { registerUser } from "../services/registerService"

export const useRegister = () => {
  return useMutation<User, Error, RegisterData>({
    mutationFn: registerUser
  })
}