import { UserStorageService } from './../application/ports';
import { CartStorageService } from '../application/ports';
import { OrdersStorageService } from '../application/ports';
import { useStore } from './store';

export const useUserStorage = (): UserStorageService => useStore();

export const useCartStorage = (): CartStorageService => useStore();

export const useOrdersStorage = (): OrdersStorageService => useStore();
