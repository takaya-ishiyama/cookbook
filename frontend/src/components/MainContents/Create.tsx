import useMutationPostItem from '@/src/hooks/cookbook/useMutationItems';
import { CookBook, CookItem, Unit_Master } from '@/src/type/CookBookType';
import { User } from '@/src/type/UserType';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Spinner,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

const Create = () => {
  const router = useRouter();
  const toast = useToast();
  const {
    register,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<CookBook>({
    // reValidateMode: 'onBlur',
    defaultValues: { title: null },
  });

  const watchField = watch(['title', 'url', 'cookitem', 'memo']);

  //@ts-ignore
  const User: User = JSON.parse(localStorage.getItem('user'));

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'cookitem',
  });

  const onSubmit = async (data: CookBook) => {
    console.log(data);
    CookBookMutation.mutate({});
  };
  const onError = (errors: any) => console.log(errors);

  const CookBookMutation = useMutationPostItem(
    User.id,
    getValues().title,
    getValues().url,
    getValues().cookitem,
    getValues().memo,
  );

  const initial_control = useRef(0);
  useEffect(() => {
    if (initial_control.current === 0) {
      append({ item: null, quantity: null, unit: null });
      initial_control.current = 1;
    }
  }, []);

  // const post_cookbook = () => {
  //   // const cookitems: CookItem[] = [];
  //   // //@ts-ignore
  //   // if (getValues().cookitem && getValues().cookitem[0].item != null) {
  //   //   getValues().cookitem?.map((value) => {
  //   //     let tmp_cookitem: CookItem = {
  //   //       item: value.item,
  //   //       quantity: value.quantity,
  //   //       unit: value.unit,
  //   //     };
  //   //     cookitems.push(tmp_cookitem);
  //   //   });
  //   // }

  //   CookBookMutation.mutate({});
  // };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Flex direction={'column'}>
          <Flex direction={'row'} m={'10px'} justifyContent={'center'}>
            <Flex direction={'column'} w={'40%'}>
              <Box flex={'1'}>タイトル</Box>
              <Input
                h={'20px'}
                borderColor={'black'}
                flex={'1'}
                {...register('title')}
              />
            </Flex>
          </Flex>

          <Flex direction={'row'} m={'10px'} justifyContent={'center'}>
            <Flex direction={'column'} w={'40%'}>
              <Box flex={'1'}>URL</Box>
              <Input
                h={'20px'}
                borderColor={'black'}
                flex={'1'}
                {...register('url')}
              />
            </Flex>
          </Flex>

          <Flex direction={'row'} justifyContent={'center'}>
            <Flex direction={'column'}>
              <Box>材料</Box>
              {fields.map((field, index) => {
                return (
                  <>
                    <Flex direction={'row'} key={index}>
                      <Box>{index + 1}</Box>
                      <Input
                        m={'10px'}
                        w={'10rem'}
                        borderColor={'black'}
                        {...register(`cookitem.${index}.item`)}
                      />
                      <Input
                        m={'10px'}
                        w={'6rem'}
                        textAlign={'right'}
                        borderColor={'black'}
                        {...register(`cookitem.${index}.quantity`, {
                          valueAsNumber: true,
                        })}
                      />
                      <Select
                        m={'10px'}
                        w={'6rem'}
                        placeholder={' '}
                        borderColor={'black'}
                        {...register(`cookitem.${index}.unit`, {
                          valueAsNumber: true,
                        })}
                      >
                        {Unit_Master.map((value, index) => {
                          return (
                            <option
                              key={value.unit_number}
                              value={value.unit_number}
                            >
                              {value.unit_name}
                            </option>
                          );
                        })}
                      </Select>
                      <Box
                        colorScheme='blue'
                        m={'10px'}
                        as={Button}
                        onClick={() => {
                          append({ item: '', quantity: null, unit: null });
                        }}
                      >
                        <AddIcon />
                      </Box>
                      <Box
                        colorScheme='red'
                        m={'10px'}
                        as={Button}
                        onClick={() => {
                          if (fields.length > 1) {
                            remove(index);
                          }
                        }}
                      >
                        <DeleteIcon />
                      </Box>
                    </Flex>
                  </>
                );
              })}
            </Flex>
          </Flex>

          <Flex direction={'row'} m={'10px'} justifyContent={'center'}>
            <Flex direction={'column'} w={'40%'}>
              <Box flex={'1'}>メモ</Box>
              <Textarea
                resize={'none'}
                borderColor={'black'}
                flex={'1'}
                {...register('memo')}
              />
            </Flex>
          </Flex>
          <Flex direction={'row'} justifyContent={'center'}>
            <Button
              colorScheme={'blue'}
              w={'100px'}
              type={'submit'}
              // onClick={post_cookbook}
            >
              追加
            </Button>
          </Flex>
        </Flex>
      </form>
    </>
  );
};

export default Create;
