import { CookBook, CookItem, CookItems } from '@/src/type/CookBookType';
import { useToast } from '@chakra-ui/react';
import axios, { AxiosError } from 'axios';
import { url } from 'inspector';
import { useRouter } from 'next/router';
import { memo } from 'react';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from 'react-query';

const base_url = 'http://localhost:8000/app/api/cookbook/';

const useMutationPostItem = (
  user_id: number | undefined,
  title: string | null | undefined,
  url: string | null | undefined,
  cookitem: CookItems | null | undefined,
  memo: string | null | undefined,
): UseMutationResult<CookBook, AxiosError, CookBook, undefined> => {
  const toast = useToast();
  const router = useRouter();
  return useMutation(
    async (): Promise<CookBook> => {
      const { data } = await axios.post<CookBook>(`${base_url}create/`, {
        user_id,
        title,
        url,
        cookitem,
        memo,
      });
      return data;
    },
    {
      onSuccess: (data) => {
        toast({
          title: '登録成功',
          description: 'レシピを登録しました',
          status: 'success',
          position: 'top',
          duration: 3000,
          isClosable: true,
        });
        router.push('/contents');
      },
      onError: (error) => {
        toast({
          title: 'エラー',
          description: '登録に失敗しました',
          status: 'error',
          position: 'top',
          duration: 3000,
          isClosable: true,
        });
        console.log(error);
      },
    },
  );
};
export default useMutationPostItem;
