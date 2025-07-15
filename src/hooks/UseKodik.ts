import { useQuery } from '@tanstack/react-query';
import { KodikResponse } from "@/types/kodik.response.ts";
import KodikService from "@/services/kodik.service.ts";

export const useKodik = (shikimoriId: number | undefined) => {
  const kodikQuery = useQuery<KodikResponse>({
    queryKey: ['serial-data', shikimoriId],
    queryFn: () => {
      if (!shikimoriId) {
        throw new Error('Shikimori ID is required');
      }
      return KodikService.getSerial(shikimoriId);
    },
    enabled: !!shikimoriId,
    staleTime: Infinity,
  });

  return { kodikQuery };
};