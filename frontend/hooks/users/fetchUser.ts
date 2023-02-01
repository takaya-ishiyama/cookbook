import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { destroyCookie, parseCookies, setCookie } from 'nookies';

const base_url = "http://localhost:8000/accounts/api";

const makeUrl = (endpoint: string): string => {
  return base_url + endpoint;
}

const fetchToken = (username: string, password: string): Promise<Response> => {
  const url = makeUrl("/token/");
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  });
};

const fetchNewToken = (): Promise<Response> => {
  const url = makeUrl("/token/refresh/");
  const cookies = parseCookies()
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(cookies["refreshToken"]),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  });
};

async function fetchUser(): Promise<Response> {
  const url = makeUrl("/detail/")
  const cookies = parseCookies()
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `JWT ${cookies["accessToken"]}`,
    },
  });
}

export const GetUser = async (username: string, password: string): Promise<Response | undefined> => {
  const resp = await fetchToken(username, password);
  if (resp.ok) {
    const tokenData = await resp.json();
    setCookie(null, 'accessToken', tokenData.access, {
        maxAge: 30 * 60,/*30min X 60second*/
    })
    setCookie(null, 'refreshToken', tokenData.refresh, {
        maxAge: 24 * 60 * 60,/* 24h X 60min X 60second*/
    })
    const user = await fetchUser();
    return user;
  } else {
    console.log("error : fetch access token");
    return;
  }
};

export const UseTokenGetUser = async () => {
  const cookies = parseCookies();
  if(cookies['accessToken']){
    // アクセストークンがあればユーザー認証
    const resp = await fetchUser();
    return resp;
  }else if(cookies['refreshToken']){
    // リフレッシュトークンがあればアクセストークンをとってきてユーザー認証
    const resp = await fetchNewToken();
    const tokenData = await resp.json();
    if(resp.ok){
      setCookie(null, 'accessToken', tokenData.access, {
        maxAge: 60 * 60,/*60min X 60second*/
      })
      setCookie(null, 'refreshToken', tokenData.refresh, {
        maxAge: 24 * 60 * 60,/* 24h X 60min X 60second*/
      })
      const user = await fetchUser();
      return user;
    }
    return;
  }else{
    // なければ何も返さない
    console.log("error : fetch access token");
    return;
  }
};