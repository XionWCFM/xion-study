import React from 'react';
import { cookies } from '../lib/fake-data';
import { Cart } from '../domain/cart';
import { User } from '../domain/user';
import { Order } from '../domain/order';
import { Product } from '../domain/product';

interface StoreValue {
  user: User | undefined;
  cart: Cart;
  cookies: Product[];
  orders: Order[];
  updateUser(user: User): void;
  updateCart(cart: Cart): void;
  updateOrders(orders: Order[]): void;
  emptyCart: () => void;
}

const StoreContext = React.createContext<null | StoreValue>(null);

export const useStore = () => {
  const value = React.useContext(StoreContext);
  if (value === null) throw new Error('컨텍스트 환경에서 사용해주세요');
  return value;
};

export const StoreProvider = ({ children }: { children?: React.ReactNode }) => {
  const [user, updateUser] = React.useState<User>();
  const [cart, updateCart] = React.useState<Cart>({ products: [] });
  const [orders, updateOrders] = React.useState<Order[]>([]);
  const value: StoreValue = {
    user,
    cart,
    cookies,
    orders,
    updateUser,
    updateCart,
    updateOrders,
    emptyCart: () => updateCart({ products: [] }),
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
