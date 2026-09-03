import authAPI from '../../api/AuthAPI.js';
import { loginTestData } from '../../data/auth/login.data.js';
import {
  expectSuccessResponse,
  expectErrorResponse,
} from '../../utils/assertions/common.assert.js';

import { expectLoginSuccess } from '../../utils/assertions/auth.assert.js';

import { expectSchema } from '../../utils/assertions/schema.assert.js';

import { loginSuccessSchema } from '../../schemas/auth/login-success.schema.js';
import { loginErrorSchema } from '../../schemas/auth/login-failed.schema.js';

describe('Auth API', () => {
  describe('Positive Scenarios', () => {
    test('LOGIN-001 : Return 200 when Valid Credentials', async () => {
      // request the login API using the AuthAPI class and the provided credentials
      const response = await authAPI.login(loginTestData.validCredentials);

      // Assertions to verify the response from the login API
      // expect the response status to be 200 (OK) and the response body to contain the expected properties
      expectSuccessResponse(response, {
        status: 200,
        message: 'Login successful',
      });

      expectLoginSuccess(response, {
        user: {
          id: 1,
          name: 'Admin',
          email: loginTestData.validCredentials.email,
        },
      });
    });
  });

  describe('Authentication Errors', () => {
    test('LOGIN-002 : Return 401 when Wrong Password', async () => {
      const response = await authAPI.login(loginTestData.wrongPassword);

      expectErrorResponse(response, {
        status: 401,
        message: 'Invalid email or password',
      });
    });

    test('LOGIN-003 : Return 401 when Email Not Found', async () => {
      const response = await authAPI.login(loginTestData.emailNotFound);

      expectErrorResponse(response, {
        status: 401,
        message: 'Invalid email or password',
      });
    });
  });

  describe('Validation Errors', () => {
    test('LOGIN-004 : Return 400 when Email is Empty', async () => {
      const response = await authAPI.login(loginTestData.emptyEmail);

      expectErrorResponse(response, {
        status: 400,
        message: 'Email and password are required',
      });
    });

    test('LOGIN-005 : Return 400 when Password is Empty', async () => {
      const response = await authAPI.login(loginTestData.emptyPassword);

      expectErrorResponse(response, {
        status: 400,
        message: 'Email and password are required',
      });
    });

    test('LOGIN-006 : Return 401 when Email is Invalid Format', async () => {
      const response = await authAPI.login(loginTestData.invalidEmailFormat);

      expectErrorResponse(response, {
        status: 401,
        message: 'Invalid email or password',
      });
    });

    test.skip('LOGIN-007 : Return 401 when Email is Invalid Format', async () => {
      const response = await authAPI.login(loginTestData.emailInvalidFormat);

      expectErrorResponse(response, {
        status: 401,
        message: 'Invalid email or password',
      });
    });
  });

  describe('JSON Schema Validation', () => {
    test('LOGIN-008 : JSON Schema Validation for Response Success', async () => {
      const response = await authAPI.login(loginTestData.validCredentials);

      expectSchema(response.body, loginSuccessSchema);
    });

    test('LOGIN-009 : JSON Schema Validation for Response Error', async () => {
      const response = await authAPI.login(loginTestData.wrongPassword);

      expectSchema(response.body, loginErrorSchema);
    });
  });
});
