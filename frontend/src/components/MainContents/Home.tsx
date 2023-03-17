import useMutationPutItem from '@/src/hooks/cookbook/useMutionPutItem';
import useQueryCookBook from '@/src/hooks/cookbook/useQueryCookBook';
import { CookBook, CookItem, Unit_Master } from '@/src/type/CookBookType';
import { User } from '@/src/type/UserType';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Spacer,
  Spinner,
  Textarea,
} from '@chakra-ui/react';
import router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import CookBookHookForm from './feature/useFormOfCookBook';
import * as styled from './styles';

const Home = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();

  const {
    register,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isValid },
    control,
    reset,
  } = useForm();

  const onSubmit = (data: CookBook) => {
    console.log(data);
  };

  const onError = (errors: any) => console.log(errors);

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

  useEffect(() => {
    if (cookbookdata) {
      cookbookdata?.data?.map(() => {
        setEditStatus((prevEditStatus) => [...prevEditStatus, false]);
      });
    }
  }, []);

  const usemutation_put_itme = useMutationPutItem({
    user_id: user?.id,
  });

  return (
    <>
      <styled.CommonStyled>
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
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {cookbookdata?.data?.map((cookbook: CookBook, index: number) => (
              <Box key={index}>
                <Flex
                  direction={'column'}
                  m='20px'
                  bg={'#fdf5e6'}
                  mx='30px'
                  shadow={'xl'}
                  key={cookbook.cookbook_id}
                >
                  {edit_status[index] ? (
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
                        id={`save${index}`}
                        colorScheme={'green'}
                        type='button'
                        onClick={() => {
                          const tmpEditStatus = [...edit_status];
                          tmpEditStatus[index] = !edit_status[index];
                          setEditStatus(tmpEditStatus);
                          const cookitem_array: CookItem[] = [];
                          cookbook.cookitem?.map((v, index) => {
                            console.log(
                              'kore',
                              getValues(
                                `cookitem${cookbook.cookbook_id}.item${index}`,
                              ),
                            );
                            cookitem_array.push({
                              item: getValues(
                                `cookitem${cookbook.cookbook_id}.item${index}`,
                              ),
                              quantity: getValues(
                                `cookiook${cookbook.cookbook_id}.quantity${index}`,
                              ),
                              unit: getValues(
                                `cookitem${cookbook.cookbook_id}.unit${index}`,
                              ),
                            });
                          });

                          console.log('kore', getValues().cookitem);
                          usemutation_put_itme.mutate({
                            cookbook_id: cookbook.cookbook_id,
                            title: getValues(`title${cookbook.cookbook_id}`),
                            url: getValues(`url${cookbook.cookbook_id}`),
                            memo: getValues(`memo${cookbook.cookbook_id}`),
                            cookitem: cookitem_array,
                          });
                        }}
                      >
                        保存
                      </Button>
                    </Flex>
                  ) : (
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
                  )}
                  <fieldset disabled={!edit_status[index]}>
                    <Flex direction={'row'} my={'3px'}>
                      <styled.CookBookHeader>タイトル</styled.CookBookHeader>
                      <Input
                        w={'85%'}
                        id={`title_input_${index}`}
                        _disabled={{ color: 'black' }}
                        defaultValue={cookbook.title ?? ''}
                        {...register(`title${cookbook.cookbook_id}`)}
                      />
                    </Flex>
                    <Flex direction={'row'} my={'3px'}>
                      <styled.CookBookHeader>URL</styled.CookBookHeader>
                      <Input
                        w={'85%'}
                        id={`URL_input_${index}`}
                        _disabled={{ color: 'black' }}
                        defaultValue={cookbook.url ?? ''}
                        {...register(`url${cookbook.cookbook_id}`)}
                      />
                    </Flex>
                    <Flex direction={'row'}>
                      <styled.CookBookHeader>材料</styled.CookBookHeader>
                      <Flex direction={'column'} w={'85%'}>
                        {cookbook?.cookitem?.map((value, index) => (
                          <Flex
                            direction={'row'}
                            key={`cookitme${index}`}
                            my={'3px'}
                          >
                            <Input
                              defaultValue={value.item?.toString()}
                              {...register(
                                `cookitem${cookbook.cookbook_id}.item${index}`,
                              )}
                              _disabled={{ color: 'black' }}
                            />
                            <Input
                              mx={'4px'}
                              defaultValue={Number(value.quantity)}
                              textAlign={'right'}
                              {...register(
                                `cookitem${cookbook.cookbook_id}.quantity${index}`,
                              )}
                              _disabled={{ color: 'black' }}
                            />
                            <Select
                              fontSize={'12px'}
                              borderColor={'black'}
                              placeholder={' '}
                              _disabled={{ color: 'black' }}
                              defaultValue={Number(value.unit)}
                              {...register(
                                `cookitem${cookbook.cookbook_id}.unit${index}`,
                              )}
                            >
                              {Unit_Master.map((data, index) => (
                                <option
                                  key={`UnitMaster${index}`}
                                  value={Number(data.unit_number)}
                                  color={'black'}
                                >
                                  {data.unit_name}
                                </option>
                              ))}
                            </Select>
                          </Flex>
                        ))}
                      </Flex>
                    </Flex>
                    <Flex direction={'column'} my={'3px'}>
                      <styled.CookBookHeader>メモ</styled.CookBookHeader>
                      <Textarea
                        borderInline={{ color: 'black' }}
                        id={`memo_input_${index}`}
                        _disabled={{ color: 'black' }}
                        defaultValue={cookbook.memo ?? ''}
                        {...register(`memo${cookbook.cookbook_id}`)}
                        borderColor={'black'}
                      />
                    </Flex>
                  </fieldset>
                </Flex>
              </Box>
            ))}
          </form>
        </Flex>
      </styled.CommonStyled>
    </>
  );
};

export default Home;
