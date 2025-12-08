import { useMutation } from "@tanstack/react-query"
import { createReservationService } from "../services/createReservationService"
import { useToken } from "../../authentication/hooks/useToken";

export const useCreateReservation = (user_id: number) => {
  const { token } = useToken();
  
  return useMutation({
    mutationFn: (data: any) => createReservationService(user_id, data, token),
  });
};
