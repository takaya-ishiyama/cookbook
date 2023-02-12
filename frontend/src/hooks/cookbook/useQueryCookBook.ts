import { CookBooks } from '@/src/type/CookBookType';
import axios, { AxiosError } from 'axios';
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

const base_url = 'http://localhost:8000/app/api';

const useQueryCookBook = (
  user: number,
  options?: UseQueryOptions<unknown, AxiosError, CookBooks>,
): UseQueryResult<CookBooks, AxiosError> => {
  return useQuery(
    ['cookbook', user],
    async (): Promise<CookBooks> => {
      const { data } = await axios.get(`${base_url}/cookbook/list/`, {
        params: { user: user },
      });
      return data;
    },
    //@ts-ignore
    options,
  );
};

export default useQueryCookBook;
