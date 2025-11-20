import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../services/loginService"
import type { LoginData, LoginRes } from "../types"

export const useLogin = () => {
  return useMutation<LoginRes, Error, LoginData>({
    mutationFn: loginUser
  })
}