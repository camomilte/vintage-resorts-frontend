import { useMutation } from "@tanstack/react-query"
import { loginUser, type LoginData, type LoginRes } from "../services/loginService"

export const useLogin = () => {
  return useMutation<LoginRes, Error, LoginData>({
    mutationFn: loginUser
  })
}