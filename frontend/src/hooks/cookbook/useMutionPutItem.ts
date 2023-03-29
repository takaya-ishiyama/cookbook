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
  UseQueryOptions,
} from 'react-query';

const base_url = 'http://localhost:8000/app/api/cookbook';

const useMutationPutItem = ({
  user_id,
  option,
}: {
  user_id: number;
  option?: UseQueryOptions;
}): UseMutationResult<CookBook, AxiosError, CookBook, undefined> => {
  const toast = useToast();
  const router = useRouter();
  return useMutation(
    async (params: CookBook): Promise<CookBook> => {
      const { data } = await axios.put<CookBook>(
        `${base_url}/update/${params.cookbook_id}/`,
        {
          cookbook_id: params.cookbook_id,
          user_id: user_id,
          title: params.title,
          url: params.url,
          cookitem: params.cookitem ?? [],
          memo: params.memo,
        },
      );
      return data;
    },
    {
      onSuccess: (data) => {
        toast({
          title: '更新成功',
          description: 'レシピを更新しました',
          status: 'success',
          position: 'top',
          duration: 3000,
          isClosable: true,
        });
        // router.reload();
      },
      onError: (error) => {
        toast({
          title: 'エラー',
          description: '更新を失敗しました',
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
export default useMutationPutItem;
