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
import { setTestMetadata } from '../../utils/allure/allure.metadata.js';
import { allureStep } from '../../utils/allure/allure.step.js';
import { attachJson } from '../../utils/allure/allure.attachment.js';

describe('Auth API', () => {
  describe('Positive Scenarios', () => {
    test('LOGIN-001 : Return 200 when Valid Credentials', async () => {
      await setTestMetadata({
        epic: 'Authentication',
        feature: 'Login API',
        story: 'Login with valid credentials',
        severity: 'critical',
        tags: ['API', 'Authentication', 'Login', 'Positive'],
        description:
          'Verify that user can login successfully using valid credentials.',
      });

      const request = loginTestData.validCredentials;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);

        await attachJson('Response', result);

        return result;
      });

      await allureStep('Validate HTTP Status and Common Response', async () => {
        expectSuccessResponse(response, {
          status: 200,
          message: 'Login successful',
        });
      });

      await allureStep('Validate Login Response', async () => {
        expectLoginSuccess(response, {
          user: {
            id: 1,
            name: 'Admin',
            email: loginTestData.validCredentials.email,
          },
        });
      });
    });
  });

  describe('Authentication Errors', () => {
    test('LOGIN-002 : Return 401 when Wrong Password', async () => {
      await setTestMetadata({
        epic: 'Authentication',
        feature: 'Login API',
        story: 'Login with wrong password',
        severity: 'critical',
        tags: ['API', 'Authentication', 'Login', 'Negative'],
        description: 'Verify that user cannot login using wrong password.',
      });

      const request = loginTestData.wrongPassword;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);

        await attachJson('Response', result);

        return result;
      });

      await allureStep('Validate HTTP Status and Common Response', async () => {
        expectErrorResponse(response, {
          status: 401,
          message: 'Invalid email or password',
        });
      });
    });

    test('LOGIN-003 : Return 401 when Email Not Found', async () => {
      await setTestMetadata({
        epic: 'Authentication',
        feature: 'Login API',
        story: 'Login with email not found',
        severity: 'critical',
        tags: ['API', 'Authentication', 'Login', 'Negative'],
        description: 'Verify that user cannot login using email not found.',
      });
      const request = loginTestData.emailNotFound;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);

        await attachJson('Response', result);

        return result;
      });

      await allureStep('Validate HTTP Status and Common Response', async () => {
        expectErrorResponse(response, {
          status: 401,
          message: 'Invalid email or password',
        });
      });
    });
  });

  describe('Validation Errors', () => {
    test('LOGIN-004 : Return 400 when Email is Empty', async () => {
      await setTestMetadata({
        epic: 'Authentication',
        feature: 'Login API',
        story: 'Login with empty email',
        severity: 'critical',
        tags: ['API', 'Authentication', 'Login', 'Negative'],
        description: 'Verify that user cannot login using empty email.',
      });
      const request = loginTestData.emptyEmail;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);

        await attachJson('Response', result);

        return result;
      });

      await allureStep('Validate HTTP Status and Common Response', async () => {
        expectErrorResponse(response, {
          status: 400,
          message: 'Email and password are required',
        });
      });
    });

    test('LOGIN-005 : Return 400 when Password is Empty', async () => {
      await setTestMetadata({
        epic: 'Authentication',
        feature: 'Login API',
        story: 'Login with empty password',
        severity: 'critical',
        tags: ['API', 'Authentication', 'Login', 'Negative'],
        description: 'Verify that user cannot login using empty password.',
      });
      const request = loginTestData.emptyPassword;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);

        await attachJson('Response', result);

        return result;
      });

      await allureStep('Validate HTTP Status and Common Response', async () => {
        expectErrorResponse(response, {
          status: 400,
          message: 'Email and password are required',
        });
      });
    });

    test('LOGIN-006 : Return 401 when Email is Invalid Format', async () => {
      await setTestMetadata({
        epic: 'Authentication',
        feature: 'Login API',
        story: 'Login with invalid email format',
        severity: 'critical',
        tags: ['API', 'Authentication', 'Login', 'Negative'],
        description:
          'Verify that user cannot login using invalid email format.',
      });
      const request = loginTestData.invalidEmailFormat;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);

        await attachJson('Response', result);

        return result;
      });

      await allureStep('Validate HTTP Status and Common Response', async () => {
        expectErrorResponse(response, {
          status: 401,
          message: 'Invalid email or password',
        });
      });
    });

    test.skip('LOGIN-007 : Return 401 when Email is Invalid Format', async () => {
      await setTestMetadata({
        epic: 'Authentication',
        feature: 'Login API',
        story: 'Login with Email is Invalid Format',
        severity: 'critical',
        tags: ['API', 'Authentication', 'Login', 'Negative'],
        description:
          'Verify that user cannot login using Email is Invalid Format.',
      });
      const response = await authAPI.login(loginTestData.emailInvalidFormat);

      expectErrorResponse(response, {
        status: 401,
        message: 'Invalid email or password',
      });
    });
  });

  describe('JSON Schema Validation', () => {
    test('LOGIN-008 : JSON Schema Validation for Response Success', async () => {
      await setTestMetadata({
        epic: 'Authentication',
        feature: 'Login API',
        story: 'Login with JSON Schema Validation for Response Success',
        severity: 'critical',
        tags: ['API', 'Authentication', 'Login', 'Positive'],
        description: 'Verify JSON Schema Validation for Response Success.',
      });
      const request = loginTestData.validCredentials;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);

        await attachJson('Response', result);

        return result;
      });

      await allureStep('Validate JSON Schema', async () => {
        expectSchema(response.body, loginSuccessSchema);
      });
    });

    test('LOGIN-009 : JSON Schema Validation for Response Error', async () => {
      await setTestMetadata({
        epic: 'Authentication',
        feature: 'Login API',
        story: 'Login with JSON Schema Validation for Response Error',
        severity: 'critical',
        tags: ['API', 'Authentication', 'Login', 'Negative'],
        description: 'Verify JSON Schema Validation for Response Error.',
      });
      const request = loginTestData.wrongPassword;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);

        await attachJson('Response', result);

        return result;
      });

      await allureStep('Validate JSON Schema', async () => {
        expectSchema(response.body, loginErrorSchema);
      });
    });
  });
});
