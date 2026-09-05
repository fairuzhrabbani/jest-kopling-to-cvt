import { registerUser } from '../factories/register.factory.js';

export const registerTestData = {
  validUser: registerUser,

  validCredentials: {
    name: 'trisno Test',
    email: 'trisno@example.com',
    password: 'Password123',
  },

  emptyName: {
    name: '',
    email: 'herman@example.com',
    password: 'Password123',
  },

  emptyEmail: {
    name: 'Herman Test',
    email: '',
    password: 'Password123',
  },

  emptyPassword: {
    name: 'Herman Test',
    email: 'fairuz@example.com',
    password: '',
  },

  invalidEmailFormat: {
    name: 'Herman Test',
    email: 'invalid-email',
    password: 'Password123',
  },
};
