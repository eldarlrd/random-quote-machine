import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { service } from '%/service.ts';

const fetchData = async <T>(endpoint: string): Promise<T> => {
  const { data } = await service.get<T>(endpoint);

  return data;
};

export const useApi = <T>(
  endpoint: string
  // schema: ZodSchema<T>
): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey: [endpoint],
    queryFn: async () => {
      try {
        const data = await fetchData<T>(endpoint);

        return schema.parse(data);
      } catch (error: unknown) {
        if (error instanceof ZodError) {
          console.error(error.errors);
          throw new ZodError(error.errors);
        }
        console.error(error);
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false
  });
};
