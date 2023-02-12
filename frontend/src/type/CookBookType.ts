import { User } from './UserType';

type CookItem = {
  items: string;
  quantity: number;
};

export type CookBooks = {
  id: number;
  title: string;
  url: string;
  memo: string;
  //   created_at: string;
  user: any;
  cookitems: any;
}[];

export type CookBook = {
  id: number;
  title: string;
  url: string;
  memo: string;
  //   created_at: string;
  user: User;
  cookitems: CookItem;
};
