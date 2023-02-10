import Login from '@/src/components/Login';
import SingUp from '@/src/components/SingUp';
import { Box, Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const login_and_singup = () => {
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
      <Flex>
        {switch_component ? (
          <>
            <Button onClick={() => setSwitchComponent(!switch_component)}>
              ユーザー登録
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

export default login_and_singup;
