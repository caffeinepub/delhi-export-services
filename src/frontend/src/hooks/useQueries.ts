import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Inquiry } from "../backend";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      serviceType: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      await actor.submitInquiry(
        data.name,
        data.email,
        data.phone,
        data.serviceType,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}

export function useGetAllInquiries() {
  const { actor, isFetching } = useActor();

  return useQuery<Inquiry[]>({
    queryKey: ["inquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllInquiries();
    },
    enabled: !!actor && !isFetching,
  });
}
