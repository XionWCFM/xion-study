import { PaymentService } from '../application/ports';
import { fakeApi } from '../lib/api';

export const usePayment = (): PaymentService => {
  return {
    tryPay: (amount: PriceCents) => {
      return fakeApi(true);
    },
  };
};
