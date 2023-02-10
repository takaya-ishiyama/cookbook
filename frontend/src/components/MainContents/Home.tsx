import useQueryCookBook from '@/src/hooks/cookbook/useQueryCookBook';
import { User } from '@/src/type/UserType';
import { Box } from '@chakra-ui/react';
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
  return <></>;
};

export default Home;
