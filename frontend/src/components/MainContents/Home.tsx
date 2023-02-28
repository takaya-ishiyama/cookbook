import useQueryCookBook from '@/src/hooks/cookbook/useQueryCookBook';
import { CookBook, Unit_Master } from '@/src/type/CookBookType';
import { User } from '@/src/type/UserType';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Spacer,
  Spinner,
  Textarea,
} from '@chakra-ui/react';
import router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CookBookHookForm from './feature/useFormOfCookBook';
import * as styled from './styles';

const Home = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();

  const [cook_book_state, setCookBook] = useState<CookBook>();

  const {
    register,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isValid },
    control,
    reset,
  } = useForm<CookBook>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user_json = localStorage.getItem('user');
      // @ts-ignore
      setUser(JSON.parse(user_json));
    }
  }, []);

  // useEffect(() => {
  //   reset({
  //     title: cook_book_state?.title ?? null,
  //     url: cook_book_state?.url ?? null,
  //     cookitem: cook_book_state?.cookitem ?? [],
  //     memo: cook_book_state?.memo ?? null,
  //   });
  // }, [cook_book_state]);

  // @ts-ignore
  const cookbookdata = useQueryCookBook(user?.id, { enabled: !!user?.id });

  const [edit_status, setEditStatus] = useState<boolean[]>([]);

  useEffect(() => {
    cookbookdata?.data?.map(() => {
      setEditStatus((prevEditStatus) => [...prevEditStatus, false]);
    });
  }, [cookbookdata]);

  // レシピ一覧
  function cookbook(cookbook: CookBook, index: number) {
    // const { register, reset } = CookBookHookForm({ cookbook });
    return (
      <>
        <Button
          onClick={() => {
            const tmpEditStatus = [...edit_status];
            tmpEditStatus[index] = !edit_status[index];
            setEditStatus(tmpEditStatus);
          }}
        >
          編集
        </Button>
        <fieldset disabled={!edit_status[index]}>
          <Flex
            direction={'column'}
            m='20px'
            bg={'#fdf5e6'}
            mx='30px'
            shadow={'xl'}
            key={index}
          >
            <InputGroup border={'black'}>
              <InputLeftAddon w={'6rem'} children='タイトル' />
              <Input {...register('title')} />
            </InputGroup>
            <InputGroup border={'black'}>
              <InputLeftAddon w={'6rem'} children='URL' />
              <Input value={`${cookbook?.title}`} />
            </InputGroup>
            <InputGroup border={'black'}>
              <InputLeftAddon w={'6rem'} children='材料' />
              {cookbook?.cookitem?.map((value) => {
                return (
                  <>
                    <Flex m='5px' direction={'row'} justifyContent={'center'}>
                      <Box mx={'2rem'}>{value.item}</Box>
                      <Box mx={'2rem'}>
                        <>
                          <Flex direction={'row'}>
                            <Box mx={'5px'}>{value.quantity}</Box>
                            <Box mx={'5px'}>
                              {
                                Unit_Master.find(
                                  (data) => data.unit_number === value.unit,
                                )?.unit_name
                              }
                            </Box>
                          </Flex>
                        </>
                      </Box>
                    </Flex>
                  </>
                );
              })}
            </InputGroup>
            <InputGroup border={'black'}>
              <InputLeftAddon w={'6rem'} children='メモ' />
            </InputGroup>
            <Textarea value={cookbook.memo ?? ''} borderColor={'black'} />
          </Flex>
        </fieldset>
      </>
    );
  }

  return (
    <>
      <styled.CommonTableStyled>
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
              <Input w={'70%'} borderColor='black' />
              <Button mx={'10px'} colorScheme={'blue'}>
                検索
              </Button>
            </Flex>
            {cookbookdata?.data?.map((list: CookBook, index: number) => {
              // reset({
              //   title: list.title ?? null,
              //   url: list.url ?? null,
              //   cookitem: list.cookitem ?? [],
              //   memo: list.memo ?? null,
              // });
              return <>{cookbook(list, index)}</>;
            })}
          </Flex>
        </form>
      </styled.CommonTableStyled>
    </>
  );
};

export default Home;
