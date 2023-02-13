import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Select,
  Spacer,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/router';
import { User, UserRegister } from '../type/UserType';
import { useMutationUserRegist } from '@/src/hooks/users/usermutationUserRegist';
import Link from 'next/link';
import UserPolicy from './UserPolicy';
import { GetUser } from '../hooks/users/fetchUser';
import error from 'next/error';

const SingUp = () => {
  const {
    register,
    getValues,
    setValue,
    watch,
    formState: { errors, isValid },
    control,
  } = useForm<UserRegister>({ reValidateMode: 'onSubmit' });
  const watch_field = watch('password1', 'password2');
  const [userpolicy, setUserPolicy] = useState<boolean>(false);
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  const getuser = async (username: string, password: string) => {
    const resp = await GetUser(username, password);
    const user: User = await resp?.json();
    if (user) {
      console.log('sucsess');
      localStorage.setItem('user', JSON.stringify(user));
      router.push(`contents`);
    } else {
      toast({
        title: 'login faild',
        status: 'error',
        position: 'top-right',
        isClosable: true,
      });
    }
  };

  const MutationUser = useMutationUserRegist(
    getValues().username,
    getValues().password1,
    {
      onSuccess: (data: User) => {
        console.log('保存成功');
        console.log(data);
        toast({
          title: '成功',
          status: 'success',
          position: 'top-right',
          isClosable: true,
        });
        getuser(getValues().username, getValues().password1).then(() =>
          router.push(`/contents`),
        );
      },
      onError: (error) => {
        console.log('保存失敗');
        toast({
          title: '失敗',
          status: 'error',
          position: 'top-right',
          isClosable: true,
        });
        console.log(error);
      },
    },
  );

  const create_user = () => {
    MutationUser.mutate({
      username: getValues().username,
      email: getValues().email,
      password: getValues().password1,
      icon: getValues().icon,
      birth: getValues().birth,
      sex: getValues().sex,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Flex mx={'1rem'} direction={'column'}>
          <Flex>
            <Spacer />
            <Flex direction={'column'}>
              <Flex direction={'row'}>
                <Box>名前</Box>
                <Spacer />
                <Box color={'red'} mx={'5px'}>
                  ※必須
                </Box>
              </Flex>
              <Input
                mb={3}
                borderColor={errors.username ? 'red' : 'glay'}
                {...register('username', { required: '入力してください' })}
              />
            </Flex>
            <Spacer />
          </Flex>

          <Flex>
            <Spacer />
            <Flex direction={'column'}>
              <Flex direction={'row'}>
                <Box>パスワード</Box>
                <Spacer />
                <Box color={'red'} mx={'5px'}>
                  ※必須
                </Box>
              </Flex>
              <Input
                mb={3}
                borderColor={errors.password1 ? 'red' : 'glay'}
                {...register('password1', { required: '入力してください' })}
              />
            </Flex>
            <Spacer />
          </Flex>

          <Flex>
            <Spacer />
            <Flex direction={'column'}>
              <Flex direction={'row'}>
                <Box>パスワード確認</Box>
                <Spacer />
                <Box color={'red'} mx={'5px'}>
                  ※必須
                </Box>
              </Flex>
              <Input
                mb={3}
                borderColor={errors.password2 ? 'red' : 'glay'}
                {...register('password2', { required: '入力してください' })}
              />
            </Flex>
            <Spacer />
          </Flex>

          <Flex>
            <Spacer />
            <Flex direction={'column'}>
              <Box>E-Mail</Box>
              <Input
                mb={3}
                borderColor={errors.email ? 'red' : 'glay'}
                {...register('email', {
                  pattern: {
                    value: /^\w+@\w+/,
                    message: '正しいメールアドレスを入力してください',
                  },
                })}
              />
            </Flex>
            <Spacer />
          </Flex>

          {/* <Flex>
            <Spacer />
            <Flex direction={'column'}>
              <Box>誕生日</Box>
              <Controller
                control={control}
                name={'birth'}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    dateFormat='yyyy/MM/dd'
                    onChange={onChange}
                    selected={value as Date}
                  />
                )}
              />
            </Flex>
            <Spacer />
          </Flex> */}

          {/* <Flex>
            <Spacer />
            <Flex direction={'column'}>
              <Box>性別</Box>
              <Select
                mb={3}
                placeholder={' '}
                borderColor={errors.sex ? 'red' : 'glay'}
                {...register('sex', { valueAsNumber: true })}
              >
                <option value={0}>男性</option>
                <option value={1}>女性</option>
              </Select>
            </Flex>
            <Spacer />
          </Flex> */}
          <Flex direction={'row'}>
            <Spacer />
            <Flex direction={'column'}>
              <Flex direction={'column'}>
                <Box
                  m={'10px'}
                  //   onClick={() => {
                  //     return <UserPolicy />;
                  //   }}
                >
                  利用規約
                </Box>
                <Checkbox
                  size={'lg'}
                  checked={userpolicy}
                  onChange={() => {
                    setUserPolicy(!userpolicy);
                  }}
                >
                  同意する
                </Checkbox>
              </Flex>
              <Button
                display={'inline-block'}
                type='submit'
                colorScheme={'blue'}
                textAlign={'center'}
                disabled={!userpolicy}
                onClick={() => {
                  create_user();
                }}
              >
                送信
              </Button>
            </Flex>
            <Spacer />
          </Flex>
        </Flex>
      </form>
    </>
  );
};

export default SingUp;
