export const registerTestData = {
  validCredentials: {
    name: 'trisno Test',
    email: 'trisno@example.com',
    password: 'Password123',
  },

  wrongPassword: {
    name: 'Herman Test',
    email: 'fairuz@example.com',
    password: 'WrongPassword',
  },

  emailNotFound: {
    name: 'Herman Test',
    email: 'nonexistent@example.com',
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
