import { User } from './UserType';

type CookItem = {
  item: string;
  quantity: number;
}[];

export type CookBooks = {
  id: number;
  title: string;
  url: string;
  memo: string;
  //   created_at: string;
  user: any;
  cookitem: any;
}[];

export type CookBook = {
  id: number;
  title: string;
  url: string;
  memo: string;
  //   created_at: string;
  user: User;
  cookitem: CookItem;
};
