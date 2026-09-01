export const loginTestData = {
  validCredentials: {
    email: 'admin@example.com',
    password: 'Password123',
  },

  wrongPassword: {
    email: 'fairuz@example.com',
    password: 'WrongPassword',
  },

  emailNotFound: {
    email: 'nonexistent@example.com',
    password: 'Password123',
  },

  emptyEmail: {
    email: '',
    password: 'Password123',
  },

  emptyPassword: {
    email: 'fairuz@example.com',
    password: '',
  },

  invalidEmailFormat: {
    email: 'invalid-email',
    password: 'Password123',
  },
};
