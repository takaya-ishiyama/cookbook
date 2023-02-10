import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { UseTokenGetUser } from '@/src/hooks/users/fetchUser';

type User = {
  id: number;
  username: string;
  email?: string;
  password: string;
  icon?: any;
  birth?: Date;
  sex?: number;
};

export const Top = () => {
  const cookies = parseCookies();
  const router = useRouter();
  const auth_check = async () => {
    const resp = await UseTokenGetUser();
    const user: User = await resp?.json();
    if (user) {
      console.log('sucsess');
      localStorage.setItem('user', JSON.stringify(user));
      router.push(`contents`);
    } else {
      router.push(`login`);
    }
  };
  return (
    <>
      <Flex>
        <Button
          fontSize={'20px'}
          onClick={() => {
            auth_check();
          }}
        >
          ホームへ
        </Button>
      </Flex>
    </>
  );
};
