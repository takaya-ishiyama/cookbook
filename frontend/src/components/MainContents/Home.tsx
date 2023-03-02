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

  const onSubmit = async (data: CookBook) => {
    console.log(data);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user_json = localStorage.getItem('user');
      // @ts-ignore
      setUser(JSON.parse(user_json));
    }
  }, []);

  // @ts-ignore
  const cookbookdata = useQueryCookBook(user?.id, { enabled: !!user?.id });
  const [edit_status, setEditStatus] = useState<boolean[]>([]);

  // useEffect(() => {
  //   reset({
  //     title: cook_book_state?.title ?? null,
  //     url: cook_book_state?.url ?? null,
  //     cookitem: cook_book_state?.cookitem ?? [],
  //     memo: cook_book_state?.memo ?? null,
  //   });
  // }, [cook_book_state]);

  useEffect(() => {
    if (cookbookdata) {
      cookbookdata?.data?.map(() => {
        setEditStatus((prevEditStatus) => [...prevEditStatus, false]);
      });
    }
  }, []);

  return (
    <>
      <styled.CommonTableStyled>
        <form onSubmit={handleSubmit(onSubmit)}>
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

            {cookbookdata?.data?.map((cookbook: CookBook, index: number) => (
              <Box key={index}>
                <Flex
                  direction={'column'}
                  m='20px'
                  bg={'#fdf5e6'}
                  mx='30px'
                  shadow={'xl'}
                  key={cookbook.id}
                >
                  {edit_status[index] ? (
                    <>
                      <Flex direction={'row'} justifyContent={'right'}>
                        <Button
                          colorScheme={'red'}
                          onClick={() => {
                            const tmpEditStatus = [...edit_status];
                            tmpEditStatus[index] = !edit_status[index];
                            setEditStatus(tmpEditStatus);
                          }}
                        >
                          キャンセル
                        </Button>
                        <Button
                          colorScheme={'green'}
                          type={'submit'}
                          onClick={() => {
                            const tmpEditStatus = [...edit_status];
                            tmpEditStatus[index] = !edit_status[index];
                            setEditStatus(tmpEditStatus);
                          }}
                        >
                          保存
                        </Button>
                      </Flex>
                    </>
                  ) : (
                    <>
                      <Flex justifyContent={'right'}>
                        <Button
                          colorScheme={'blue'}
                          onClick={() => {
                            const tmpEditStatus = [...edit_status];
                            tmpEditStatus[index] = !edit_status[index];
                            setEditStatus(tmpEditStatus);
                          }}
                        >
                          編集
                        </Button>
                      </Flex>
                    </>
                  )}

                  <fieldset disabled={!edit_status[index]}>
                    <InputGroup border={'black'}>
                      <InputLeftAddon w={'6rem'} children='タイトル' />
                      <Input
                        _disabled={{ color: 'black' }}
                        {...register('title')}
                      />
                    </InputGroup>
                    <Flex direction={'row'}></Flex>
                    <InputGroup border={'black'}>
                      <InputLeftAddon w={'6rem'} children='URL' />
                      <Input
                        _disabled={{ color: 'black' }}
                        value={`${cookbook?.title}`}
                      />
                    </InputGroup>
                    <InputGroup border={'black'}>
                      <InputLeftAddon w={'6rem'} children='材料' />
                      {cookbook?.cookitem?.map((value, index) => (
                        <Flex
                          m='5px'
                          direction={'row'}
                          justifyContent={'center'}
                          key={index}
                        >
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
                      ))}
                    </InputGroup>
                    <InputGroup border={'black'}>
                      <InputLeftAddon w={'6rem'} children='メモ' />
                    </InputGroup>
                    <Textarea
                      _disabled={{ color: 'black' }}
                      value={cookbook.memo ?? ''}
                      borderColor={'black'}
                    />
                  </fieldset>
                </Flex>
              </Box>
            ))}
          </Flex>
        </form>
      </styled.CommonTableStyled>
    </>
  );
};

export default Home;
