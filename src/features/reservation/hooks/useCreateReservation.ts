import { useMutation } from "@tanstack/react-query"
import { createReservationService } from "../services/createReservationService"

export const useCreateReservation = (user_id: number) => {
  return useMutation({
    mutationFn: (data: any) => createReservationService(user_id, data),
  });
};
