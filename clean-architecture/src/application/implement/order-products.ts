import { Cart } from '@/src/domain/cart';
import { createOrder } from '@/src/domain/order';
import { User } from '@/src/domain/user';
import { useNotifier } from '@/src/services/adapter/notification-adapter';
import { usePayment } from '@/src/services/adapter/payment-adapter';
import {
  useCartStorage,
  useOrdersStorage,
} from '@/src/services/adapter/storage-adapter';

export const useOrderProducts = () => {
  const notifier = useNotifier();
  const payment = usePayment();
  const orderStorage = useOrdersStorage();
  const cartStorage = useCartStorage();

  const orderProducts = async (user: User, cart: Cart) => {
    const order = createOrder(user, cart);
    const paid = await payment.tryPay(order.total);
    if (!paid) return notifier.notify("The payment wasn't successful");
    const { orders } = orderStorage;
    orderStorage.updateOrders([...orders, order]);
    cartStorage.emptyCart();
  };
  return orderProducts;
};
