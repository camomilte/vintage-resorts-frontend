import { useMutation } from "@tanstack/react-query"
import { loginUser, type LoginData, type ResData } from "../services/loginService"

export const useLogin = () => {
  return useMutation<ResData, Error, LoginData>({
    mutationFn: loginUser
  })
}