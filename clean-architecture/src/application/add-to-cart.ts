import { addProduct } from '../domain/cart';
import { Product } from '../domain/product';
import { User, hasAllergy } from '../domain/user';
import { useNotifier } from '../services/notification-adapter';
import { useCartStorage } from '../services/storage-adapter';

export const useAddToCart = () => {
  const storage = useCartStorage();
  const notifier = useNotifier();

  const addToCart = (user: User, product: Product) => {
    const warning = 'This cookie is dangerous to your health';
    const isDangerous = product.toppings.some((item) => hasAllergy(user, item));
    if (isDangerous) return notifier.notify(warning);

    const { cart } = storage;
    storage.updateCart(addProduct(cart, product));
  };
  return { addToCart };
};
