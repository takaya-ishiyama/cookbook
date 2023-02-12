import useQueryCookBook from '@/src/hooks/cookbook/useQueryCookBook';
import { CookBook } from '@/src/type/CookBookType';
import { User } from '@/src/type/UserType';
import { Box, Flex, Spacer, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Home = () => {
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

  console.log(cookbookdata.data);

  function cookbook(cookbook: CookBook) {
    return (
      <>
        <Flex
          direction={'column'}
          m='20px'
          bg={'#fdf5e6'}
          mx='20%'
          shadow={'xl'}
        >
          <Box m='5px'>タイトル:{cookbook?.title}</Box>
          <Box m='5px'>URL:{cookbook?.url}</Box>
          <Box m='5px'>{cookbook?.cookitems?.items}</Box>
          <Box m='5px'>{cookbook?.cookitems?.quantity}</Box>
        </Flex>
      </>
    );
  }

  return (
    <>
      <Flex direction={'column'} textAlign={'center'}>
        <Box>ホーム</Box>
        <Box>もう少しまってて</Box>
        {cookbookdata?.data?.map((list: CookBook, index: number) => {
          return <>{cookbook(list)}</>;
        })}
      </Flex>
    </>
  );
};

export default Home;
