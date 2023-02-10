import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import HeaderComponent from '@/src/components/HeaderComponent';
import { useEffect, useState } from 'react';
import { User } from '@/src/type/UserType';
import Login from '@/src/components/Login';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import { UseTokenGetUser } from '@/src/hooks/users/fetchUser';
import { Top } from '@/src/components/Top';
import SingUp from '@/src/components/SingUp';
import LoginOrSingup from '@/src/components/LoginOrSingUp';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  // const [user, setUser] = useState<User>();
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const user_json = localStorage.getItem('user');
  //     // @ts-ignore
  //     setUser(JSON.parse(user_json));
  //   }
  // }, []);

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
    const [user, setUser] = useState<User>();
    const cookies = parseCookies();
    const router = useRouter();
    const auth_check = async () => {
      const resp = await UseTokenGetUser();
      const user: User = await resp?.json();
      if (user) {
        console.log('sucsess');
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
      } else {
        // router.push(`login`);
        console.log('faild');
      }
    };
    useEffect(() => {
      auth_check();
    }, []);
    return <>{user ? authorized : unauthorize}</>;
  }

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <DisplayController
          unauthorize={<LoginOrSingup />}
          authorized={
            <Flex direction={'column'}>
              <HeaderComponent />
              <Component {...pageProps} />
            </Flex>
          }
        />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
