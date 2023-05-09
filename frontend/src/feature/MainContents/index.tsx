import { UserContext } from '@/pages/_app';
import useMutationPutItem from '@/src/hooks/cookbook/useMutionPutItem';
import useQueryCookBook from '@/src/hooks/cookbook/useQueryCookBook';
import {
  CookBook,
  CookBooks,
  CookItem,
  CookItems,
  Unit_Master,
} from '@/src/type/CookBookType';
import { User } from '@/src/type/UserType';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Input, Select, Textarea } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as styled from './styles';

const Home = () => {
  const router = useRouter();

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

  const { user, setUser } = useContext(UserContext);

  const [edit_status, setEditStatus] = useState<boolean[]>([]);
  const [cookbooks, setCookBooks] = useState<CookBooks>([]);
  const { data: cookbookdata, isLoading: cookbookIsLoading } = useQueryCookBook(
    // @ts-ignore
    user?.id,
    {
      enabled: !!user?.id,
      onSuccess: (data) => {
        console.log(data);
        setCookBooks(data);
      },
      onError: (e) => {
        console.log(e);
      },
    },
  );

  useEffect(() => {
    if (cookbookdata) {
      cookbookdata?.map((cookbook) => {
        setEditStatus((prevEditStatus) => [...prevEditStatus, false]);
        //@ts-ignore
        // setCookItems([...cookitems, cookbook.cookitem]);
      });
    }
  }, []);

  const usemutation_put_itme = useMutationPutItem({
    //@ts-ignore
    user_id: user?.id,
  });

  const addCookItem = (cookbook: CookBook, index: number) => {
    const updateCookBooks = [...cookbooks];
    updateCookBooks[index].cookitem?.push({
      item: '',
      quantity: null,
      unit: null,
    });
    setCookBooks(updateCookBooks);
  };
  const removeCookItem = (index: number, cookitem_index: number) => {
    // cookbook?.cookitem.splice(index);
    // console.log(cookitem_index);
    const updateCookBooks = [...cookbooks];
    updateCookBooks[index].cookitem?.splice(cookitem_index, 1);
    setCookBooks(updateCookBooks);
  };

  if (cookbookIsLoading) {
    return <Box>Loading</Box>;
  }

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
            {cookbooks?.map((cookbook: CookBook, index: number) => {
              return (
                <Box key={`cookbook${index}`}>
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
                              cookitem_array.push({
                                item: getValues(
                                  `cookitem.${cookbook.cookbook_id}.item${index}`,
                                ),
                                quantity: getValues(
                                  `cookitem.${cookbook.cookbook_id}.quantity${index}`,
                                ),
                                unit: getValues(
                                  `cookitem.${cookbook.cookbook_id}.unit${index}`,
                                ),
                              });
                            });

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
                          {cookbook?.cookitem?.map((value, cookitem_index) => {
                            return (
                              <Flex
                                direction={'row'}
                                key={`cookbook${cookbook.cookbook_id}-cookitme${cookitem_index}`}
                                my={'3px'}
                              >
                                <Input
                                  defaultValue={value.item?.toString()}
                                  {...register(
                                    `cookitem.${cookbook.cookbook_id}.item${cookitem_index}`,
                                  )}
                                  _disabled={{ color: 'black' }}
                                />
                                <Input
                                  mx={'4px'}
                                  defaultValue={Number(value.quantity)}
                                  textAlign={'right'}
                                  {...register(
                                    `cookitem.${cookbook.cookbook_id}.quantity${cookitem_index}`,
                                    { valueAsNumber: true },
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
                                    `cookitem.${cookbook.cookbook_id}.unit${cookitem_index}`,
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
                                <Box
                                  colorScheme='red'
                                  as={Button}
                                  onClick={() => {
                                    removeCookItem(index, cookitem_index);
                                  }}
                                >
                                  <DeleteIcon />
                                </Box>
                              </Flex>
                            );
                          })}
                          <Flex direction={'row'} justifyContent={'right'}>
                            <Box
                              colorScheme='blue'
                              as={Button}
                              onClick={() => {
                                addCookItem(cookbook, index);
                              }}
                            >
                              <AddIcon />
                            </Box>
                          </Flex>
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
              );
            })}
          </form>
        </Flex>
      </styled.CommonStyled>
    </>
  );
};

export default Home;
