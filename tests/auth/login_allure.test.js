import authAPI from '../../api/AuthAPI.js';
import userRepository from '../../database/repositories/user.repository.js';
import { loginTestData } from '../../data/auth/login.data.js';
import {
  expectSuccessResponse,
  expectErrorResponse,
} from '../../utils/assertions/common.assert.js';
import { expectLoginSuccess } from '../../utils/assertions/auth.assert.js';
import { expectSchema } from '../../utils/assertions/schema.assert.js';
import { loginSuccessSchema } from '../../schemas/auth/login-success.schema.js';
import { loginErrorSchema } from '../../schemas/auth/login-failed.schema.js';
import { expectUserInDatabase } from '../../utils/assertions/database.assert.js';
import { setTestMetadata } from '../../utils/allure/allure.metadata.js';
import { loginMetadata } from '../../utils/allure/auth.metadata.js';
import { allureStep } from '../../utils/allure/allure.step.js';
import { attachJson } from '../../utils/allure/allure.attachment.js';

describe('Auth API', () => {
  describe('Positive Scenarios', () => {
    test('LOGIN-001 : Return 200 when Valid Credentials', async () => {
      await setTestMetadata(
        loginMetadata({
          testCaseId: 'LOGIN-001',
          story: 'Login with valid credentials',
          tags: ['Positive', 'Regression'],
          severity: 'critical',
          priority: 'high',
          description:
            'Verify that user can login successfully using valid credentials.',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );

      const request = loginTestData.validCredentials;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);
        await attachJson('Request Headers', result.requestHeaders);
        await attachJson('Response Headers', result.headers);
        await attachJson('Response', result.body);

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

  describe('Negative Scenarios', () => {
    test('LOGIN-002 : Return 401 when Wrong Password', async () => {
      await setTestMetadata(
        loginMetadata({
          testCaseId: 'LOGIN-002',
          story: 'Login with wrong password',
          tags: ['Negative', 'Smoke'],
          severity: 'critical',
          priority: 'high',
          description: 'Verify that user cannot login using wrong password.',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );

      const request = loginTestData.wrongPassword;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);
        await attachJson('Request Headers', result.requestHeaders);
        await attachJson('Response Headers', result.headers);
        await attachJson('Response', result.body);

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
      await setTestMetadata(
        loginMetadata({
          testCaseId: 'LOGIN-003',
          story: 'Login with email not found',
          tags: ['Negative', 'Smoke'],
          severity: 'critical',
          priority: 'high',
          description: 'Verify that user cannot login using email not found.',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );

      const request = loginTestData.emailNotFound;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);
        await attachJson('Request Headers', result.requestHeaders);
        await attachJson('Response Headers', result.headers);
        await attachJson('Response', result.body);

        return result;
      });

      await allureStep('Validate HTTP Status and Common Response', async () => {
        expectErrorResponse(response, {
          status: 401,
          message: 'Invalid email or password',
        });
      });
    });

    test('LOGIN-004 : Return 400 when Email is Empty', async () => {
      await setTestMetadata(
        loginMetadata({
          testCaseId: 'LOGIN-004',
          story: 'Login with email is empty',
          tags: ['Negative', 'Smoke'],
          severity: 'critical',
          priority: 'high',
          description: 'Verify that user cannot login using empty email.',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );

      const request = loginTestData.emptyEmail;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);
        await attachJson('Request Headers', result.requestHeaders);
        await attachJson('Response Headers', result.headers);
        await attachJson('Response', result.body);

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
      await setTestMetadata(
        loginMetadata({
          testCaseId: 'LOGIN-005',
          story: 'Login with empty password',
          tags: ['Negative', 'Smoke'],
          severity: 'critical',
          priority: 'high',
          description: 'Verify that user cannot login using empty password.',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );

      const request = loginTestData.emptyPassword;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);
        await attachJson('Request Headers', result.requestHeaders);
        await attachJson('Response Headers', result.headers);
        await attachJson('Response', result.body);

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
      await setTestMetadata(
        loginMetadata({
          testCaseId: 'LOGIN-006',
          story: 'Login with invalid email format',
          tags: ['Negative', 'Smoke'],
          severity: 'critical',
          priority: 'high',
          description:
            'Verify that user cannot login using invalid email format.',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );

      const request = loginTestData.invalidEmailFormat;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);
        await attachJson('Request Headers', result.requestHeaders);
        await attachJson('Response Headers', result.headers);
        await attachJson('Response', result.body);

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
      await setTestMetadata(
        loginMetadata({
          story: 'Login with invalid email format',
          tags: ['Negative', 'Smoke'],
          description:
            'Verify that user cannot login using Email is Invalid Format.',
        }),
      );

      const response = await authAPI.login(loginTestData.emailInvalidFormat);

      expectErrorResponse(response, {
        status: 401,
        message: 'Invalid email or password',
      });
    });
  });

  describe('JSON Schema Validation', () => {
    test('LOGIN-008 : JSON Schema Validation for Response Success', async () => {
      await setTestMetadata(
        loginMetadata({
          testCaseId: 'LOGIN-008',
          story: 'Login with JSON Schema Validation for Response Success',
          tags: ['Positive', 'Regression'],
          severity: 'critical',
          priority: 'critical',
          description: 'Verify JSON Schema Validation for Response Success.',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );

      const request = loginTestData.validCredentials;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);
        await attachJson('Request Headers', result.requestHeaders);
        await attachJson('Response Headers', result.headers);
        await attachJson('Response', result.body);

        return result;
      });

      await allureStep('Validate JSON Schema', async () => {
        expectSchema(response.body, loginSuccessSchema);
      });
    });

    test('LOGIN-009 : JSON Schema Validation for Response Error', async () => {
      await setTestMetadata(
        loginMetadata({
          testCaseId: 'LOGIN-009',
          story: 'Login with JSON Schema Validation for Response Error',
          tags: ['Negative', 'Smoke'],
          severity: 'critical',
          priority: 'critical',
          description: 'Verify JSON Schema Validation for Response Error.',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );

      const request = loginTestData.wrongPassword;

      const response = await allureStep('Send Login Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.login(request);
        await attachJson('Request Headers', result.requestHeaders);
        await attachJson('Response Headers', result.headers);
        await attachJson('Response', result.body);

        return result;
      });

      await allureStep('Validate JSON Schema', async () => {
        expectSchema(response.body, loginErrorSchema);
      });
    });
  });

  describe('Database Validation', () => {
    test('LOGIN-010 : Database Validation for table users', async () => {
      await setTestMetadata(
        loginMetadata({
          testCaseId: 'LOGIN-010',
          story: 'Login with Database Validation for table users',
          tags: ['Positive', 'Regression'],
          severity: 'critical',
          priority: 'critical',
          description: 'Verify Database Validation for table users.',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );
      const request = loginTestData.validCredentials;

      await allureStep('Validate User in Database', async () => {
        const dbUser = await userRepository.findByEmail(request.email);

        expectUserInDatabase(dbUser, {
          name: 'Admin',
          email: request.email,
          role: 'admin',
        });
      });
    });
  });
});
