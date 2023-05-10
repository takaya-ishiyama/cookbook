import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import HeaderComponent from '@/src/feature/HeaderComponent';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { User } from '@/src/type/UserType';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import { UseTokenGetUser } from '@/src/hooks/users/fetchUser';
import LoginOrSingup from '@/src/feature/LoginOrSingUp';

const queryClient = new QueryClient();

export const UserContext = createContext<{
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}>({ user: null, setUser: () => {} });

const auth_check = async () => {
  const cookies = parseCookies();
  const router = useRouter();
  const resp = await UseTokenGetUser();
  const user: User = await resp?.json();

  if (user) {
    return user;
  } else {
    return null;
  }
};

const DisplayController = ({
  user,
  unauthorize,
  authorized,
}: {
  user: User | null;
  /** 未認証時の表示 */
  unauthorize: JSX.Element;
  /** 認証済み時の表示 */
  authorized: JSX.Element;
}) => {
  return <>{user !== null ? authorized : unauthorize}</>;
};

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null);
  if (user == null) {
    auth_check().then((user) => {
      setUser(user);
    });
  }
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{ user, setUser }}>
          <DisplayController
            user={user}
            unauthorize={<LoginOrSingup />}
            authorized={
              <Flex direction={'column'}>
                <HeaderComponent />
                <Component {...pageProps} />
              </Flex>
            }
          />
        </UserContext.Provider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
