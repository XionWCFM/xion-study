import { UserStorageService } from '../../application/port/ports';
import { CartStorageService } from '../../application/port/ports';
import { OrdersStorageService } from '../../application/port/ports';
import { useStore } from '../store';

export const useUserStorage = (): UserStorageService => useStore();

export const useCartStorage = (): CartStorageService => useStore();

export const useOrdersStorage = (): OrdersStorageService => useStore();
