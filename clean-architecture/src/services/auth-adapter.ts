import { UserName } from './../domain/user';
import { AuthenticationService } from '../application/ports';
import { fakeApi } from './api';

export const useAuth = (): AuthenticationService => {
  return {
    auth(name: UserName, email: Email) {
      return fakeApi({
        name,
        email,
        id: 'sample-userId',
        allergies: ['cocoa', 'cherry'],
        preferences: ['marshmallow', 'peanuts'],
      });
    },
  };
};
