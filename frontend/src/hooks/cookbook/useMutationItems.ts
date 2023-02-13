import { CookBooks } from '@/src/type/CookBookType';
import axios, { AxiosError } from 'axios';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from 'react-query';

const base_url = 'http://localhost:8000/app/api';

const useMutationPostItem = (
  user_id: number,
  title: string,
  options?: UseMutationOptions<CookBooks, AxiosError, CookBooks, undefined>,
): UseMutationResult<CookBooks, AxiosError, CookBooks, undefined> => {
  return useMutation(async (params: CookBooks): Promise<CookBooks> => {
    const { data } = await axios.post<CookBooks>(`${base_url}create/`, {
      user_id,
      title,
      params,
    });
    return data;
  }, options);
};
export default useMutationPostItem;
