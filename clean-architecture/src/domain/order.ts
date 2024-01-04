import { Cart } from './cart';
import { totalPrice } from './product';
import { User } from './user';

export type OrderStatus = 'new' | 'delivery' | 'completed';

export type Order = {
  user: UniqueId;
  cart: Cart;
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;
};

export const createOrder = (user: User, cart: Cart): Order => {
  return {
    cart,
    user: user.id,
    status: 'new',
    created: new Date().toISOString(),
    total: totalPrice(cart.products),
  };
};
