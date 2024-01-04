import { Cart } from './cart';

export type OrderStatus = 'new' | 'delivery' | 'completed';

export type Order = {
  user: string;
  cart: Cart;
  created: string;
  status: OrderStatus;
  total: string;
};
