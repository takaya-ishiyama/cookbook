import { User } from './UserType';

export const Unit_Master = [
  {
    unit_number: 0,
    unit_name: 'g',
  },
  {
    unit_number: 1,
    unit_name: 'ml',
  },
  {
    unit_number: 2,
    unit_name: 'cc',
  },
  {
    unit_number: 3,
    unit_name: '大さじ',
  },
  {
    unit_number: 4,
    unit_name: '小さじ',
  },
  {
    unit_number: 5,
    unit_name: '適量',
  },
  {
    unit_number: 6,
    unit_name: '個',
  },
];

export type CookItems = {
  item?: string | null;
  quantity?: number | null;
  unit?: number | null;
}[];

export type CookItem = {
  item?: string | null;
  quantity?: number | null;
  unit?: number | null;
};

export type CookBooks = {
  id?: number;
  title?: string | null;
  url?: string | null;
  memo?: string | null;
  user?: any;
  cookitem?: CookItems;
}[];

export type CookBook = {
  id?: number;
  title?: string | null;
  url?: string | null;
  memo?: string | null;
  user?: User;
  cookitem?: CookItems;
};
