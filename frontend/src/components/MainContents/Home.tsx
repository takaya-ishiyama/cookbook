import useQueryCookBook from '@/src/hooks/cookbook/useQueryCookBook';
import { CookBook } from '@/src/type/CookBookType';
import { User } from '@/src/type/UserType';
import {
  Box,
  Button,
  Flex,
  Input,
  Spacer,
  Spinner,
  Textarea,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user_json = localStorage.getItem('user');
      // @ts-ignore
      setUser(JSON.parse(user_json));
    }
  }, []);

  // @ts-ignore
  const cookbookdata = useQueryCookBook(user?.id);

  // レシピ一覧
  function cookbook(cookbook: CookBook) {
    return (
      <>
        <Flex
          direction={'column'}
          m='20px'
          bg={'#fdf5e6'}
          mx='30%'
          shadow={'xl'}
        >
          <Box m='5px' mx={'10px'}>
            タイトル:{cookbook?.title}
          </Box>
          <Box m='5px' mx={'10px'}>
            URL:{cookbook?.url}
          </Box>
          <Box m='5px' mx={'10px'}>
            材料：
          </Box>
          {cookbook?.cookitem?.map((value) => {
            return (
              <>
                <Flex m='5px' direction={'row'} justifyContent={'center'}>
                  <Box mx={'2rem'}>{value.item}</Box>
                  <Box mx={'2rem'}>
                    <>
                      {value.quantity}
                      {value.unit}
                    </>
                  </Box>
                </Flex>
              </>
            );
          })}
          <Box m='5px' mx={'10px'}>
            <Box>メモ</Box>
            <Textarea
              value={cookbook.memo ?? ''}
              borderColor={'black'}
              disabled
            />
          </Box>
        </Flex>
      </>
    );
  }

  return (
    <>
      <form>
        <Flex direction={'column'}>
          <Flex direction={'row'} justifyContent='center'>
            <Button
              w={'5rem'}
              mx={'10px'}
              mt={'20px'}
              colorScheme={'blue'}
              onClick={() => router.push('/contents/create')}
            >
              追加
            </Button>
            <Button w={'5rem'} mx={'10px'} mt={'20px'} colorScheme={'blue'}>
              編集
            </Button>
          </Flex>
          <Flex
            direction={'row'}
            py={'20px'}
            mt={'10px'}
            justifyContent='center'
          >
            <Input w={'35%'} borderColor='black' />
            <Button mx={'10px'} colorScheme={'blue'}>
              検索
            </Button>
          </Flex>
          {cookbookdata?.data?.map((list: CookBook) => {
            return <>{cookbook(list)}</>;
          })}
        </Flex>
      </form>
    </>
  );
};

export default Home;
