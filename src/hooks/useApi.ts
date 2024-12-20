import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type Joi from 'joi';

import { service } from '%/service.ts';

interface SchemaProps<T> {
  value: T;
  error?: Joi.ValidationError;
}

const fetchData = async <T>(endpoint: string): Promise<T> => {
  const { data } = await service.get<T>(endpoint);

  return data;
};

export const useApi = <T>(
  endpoint: string,
  schema: Joi.Schema<T>
): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey: [endpoint],
    queryFn: async () => {
      try {
        const data = await fetchData<T>(endpoint);

        const { value, error } = schema.validate(data) as SchemaProps<T>;

        if (error) {
          console.error(error.details);
          throw new Error();
        }

        return value;
      } catch (error: unknown) {
        console.error(error);
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false
  });
};
