import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { UseTokenGetUser } from '@/src/hooks/users/fetchUser';
import Link from 'next/link';

export const Top = () => {
  return (
    <>
      <Flex direction={'column'}>
        {/* <Box fontSize={'20px'}>開発中</Box>
        <Link href='/contents'>ホームへ</Link> */}
        <Box>loading</Box>
      </Flex>
    </>
  );
};
