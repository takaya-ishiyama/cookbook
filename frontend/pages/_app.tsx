import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import HeaderComponent from '@/src/components/HeaderComponent';
import { useEffect, useState } from 'react';
import { User } from '@/src/type/UserType';
import Login from '@/src/components/Login';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user_json = localStorage.getItem('user');
      // @ts-ignore
      setUser(JSON.parse(user_json));
    }
  }, []);

  /** 表示制御用コンポーネント */
  function DisplayController({
    unauthorize,
    authorized,
  }: {
    /** 未認証時の表示 */
    unauthorize: JSX.Element;
    /** 認証済み時の表示 */
    authorized: JSX.Element;
  }) {
    //authcheck→中で、チェックでエラーが出てたらisloginのlocalstrageをfalseにする。
    const [user, setUser] = useState<User>();
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const user_json = localStorage.getItem('user');
        // @ts-ignore
        setUser(JSON.parse(user_json));
      }
    }, []);
    return <>{user ? authorized : unauthorize}</>;
  }

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <HeaderComponent />
        <DisplayController
          unauthorize={<Login />}
          authorized={<Component {...pageProps} />}
        />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
