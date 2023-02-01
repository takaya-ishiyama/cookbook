import { GetUser } from '@/hooks/users/fetchUser';
import { Box, Button, Flex, Input, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type User = {
  id: number,
  username: string,
  email?: string,
  password: string,
  icon?: any,
  birth?: Date,
  sex?: number,
}

const Login = () => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    reValidateMode: "onSubmit"
  });

  const onSubmit = (data: any, e: any) => console.log(data, e);
  const onError = (errors: any, e: any) => console.log(errors, e);
  const router = useRouter();

  const toast = useToast();
  const getuser = async() => {
    const resp = await GetUser(getValues().username,getValues().password);
    const user: User = await resp?.json()
    if(user){
      console.log("sucsess");
      localStorage.setItem('id', user.id.toString());
      localStorage.setItem('name', user.username);
      router.push(`contents`);
    }else{
      toast({
        title: 'login faild',
        status: 'error',
        position: 'top-right',
        isClosable: true,
      });
    }
  }

  

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Flex
              mx={"1rem"}
              w={"40%"}
              flexFlow={"column"}
            >
              <Box>名前</Box>
              <Input
                mb={3}
                borderColor={errors.username? "red": "glay"}
                {...register("username", {required: "入力してください"})}
              />
              {/* {errors.username && errors.username.message} */}
              <Box>パスワード</Box>
              <Input
                mb={3}
                borderColor={errors.password? "red": "glay"}
                {...register("password",{required: "入力してください"})}
              />
              {/* {errors.password && errors.password.message} */}
              <Button 
                w={"15%"}
                display={"inline-block"}
                type="submit"
                bgColor={"blue.300"}
                onClick={()=>getuser()}
              >
                送信
              </Button>
            </Flex>
        </form>
    </>
  )
}

export default Login;