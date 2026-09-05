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
    email: 'invalid-email-format',
    password: 'Password123',
  },
};

export const loginNegativeCases = [
  {
    testId: 'LOGIN-002',
    description: 'Wrong Password',
    data: {
      email: 'fairuz@example.com',
      password: 'WrongPassword',
    },
    expected: {
      status: 401,
      success: false,
      message: 'Invalid email or password',
    },
  },

  {
    testId: 'LOGIN-003',
    description: 'Email Not Found',
    data: {
      email: 'nonexistent@example.com',
      password: 'Password123',
    },
    expected: {
      status: 401,
      success: false,
      message: 'Invalid email or password',
    },
  },

  {
    testId: 'LOGIN-004',
    description: 'Email is Empty',
    data: {
      email: '',
      password: 'Password123',
    },
    expected: {
      status: 400,
      success: false,
      message: 'Email and password are required',
    },
  },

  {
    testId: 'LOGIN-005',
    description: 'Password is Empty',
    data: {
      email: 'fairuz@example.com',
      password: '',
    },
    expected: {
      status: 400,
      success: false,
      message: 'Email and password are required',
    },
  },

  {
    testId: 'LOGIN-006',
    description: 'Email is Invalid Format',
    data: {
      email: 'invalid-email',
      password: 'Password123',
    },
    expected: {
      status: 401,
      success: false,
      message: 'Invalid email or password',
    },
  },
];
