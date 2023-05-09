import Login from '@/src/feature/Login';
import SingUp from '@/src/feature/SingUp';
import { Box, Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const LoginOrSingup = () => {
  const [switch_component, setSwitchComponent] = useState<boolean>(true);
  const router = useRouter();
  function DisplayLoginOrSingUp({
    login,
    sing_up,
  }: {
    login: JSX.Element;
    sing_up: JSX.Element;
  }) {
    return <>{switch_component ? login : sing_up}</>;
  }

  return (
    <>
      <Flex direction={'column'}>
        {switch_component ? (
          <>
            <Button onClick={() => setSwitchComponent(!switch_component)}>
              ユーザー登録へ
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => setSwitchComponent(!switch_component)}>
              ログインへ
            </Button>
          </>
        )}

        <DisplayLoginOrSingUp login={<Login />} sing_up={<SingUp />} />
      </Flex>
    </>
  );
};

export default LoginOrSingup;
