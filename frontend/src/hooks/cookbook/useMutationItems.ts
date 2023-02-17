import { CookBook } from '@/src/type/CookBookType';
import axios, { AxiosError } from 'axios';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from 'react-query';

const base_url = 'http://localhost:8000/app/api/cookbook/';

const useMutationPostItem = (
  user_id: number | undefined,
  title: string | null | undefined,
  options?: UseMutationOptions<CookBook, AxiosError, CookBook, undefined>,
): UseMutationResult<CookBook, AxiosError, CookBook, undefined> => {
  return useMutation(async (params: CookBook): Promise<CookBook> => {
    const { data } = await axios.post<CookBook>(`${base_url}create/`, {
      user_id,
      title,
      params,
    });
    return data;
  }, options);
};
export default useMutationPostItem;
