import authAPI from '../../api/AuthAPI.js';
import {
  loginTestData,
  loginNegativeCases,
} from '../../data/auth/login.data.js';

import {
  expectSuccessResponse,
  expectErrorResponse,
} from '../../utils/assertions/common.assert.js';

import { expectLoginSuccess } from '../../utils/assertions/auth.assert.js';

describe('Auth API', () => {
  describe('Positive Scenarios', () => {
    test('LOGIN-001 : Return 200 when Valid Credentials', async () => {
      const response = await authAPI.login(loginTestData.validCredentials);

      expectSuccessResponse(response, {
        status: 200,
        message: 'Login successful',
      });

      expectLoginSuccess(response, {
        user: {
          id: 1,
          name: 'Admin',
          email: 'admin@example.com',
        },
      });
    });
  });

  describe('Negative Scenarios', () => {
    test.each(loginNegativeCases)(
      '$testId : Return $expected.status when $description',
      async ({ data, expected }) => {
        const response = await authAPI.login(data);

        expectErrorResponse(response, expected);
      },
    );
  });
});
