import { UserName } from '../../domain/user';
import { useAuth } from '../../services/adapter/auth-adapter';
import { useUserStorage } from '../../services/adapter/storage-adapter';

export const useAuthenticate = () => {
  const storage = useUserStorage();
  const auth = useAuth();

  const authenticate = async (name: UserName, email: Email) => {
    const user = await auth.auth(name, email);
    storage.updateUser(user);
  };
  return {
    user: storage.user,
    authenticate,
  };
};
