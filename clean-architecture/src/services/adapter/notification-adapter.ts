import { NotificationService } from '../../application/port/ports';

export const useNotifier = (): NotificationService => {
  return {
    notify: (message: string) => window.alert(message),
  };
};
