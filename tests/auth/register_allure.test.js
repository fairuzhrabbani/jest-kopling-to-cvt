import authAPI from '../../api/AuthAPI.js';
import { registerTestData } from '../../data/auth/register.data.js';
import { setTestMetadata } from '../../utils/allure/allure.metadata.js';
import { allureStep } from '../../utils/allure/allure.step.js';
import { attachJson } from '../../utils/allure/allure.attachment.js';
import {
  expectSuccessResponse,
  expectErrorResponse,
} from '../../utils/assertions/common.assert.js';
import { expectRegisterSuccess } from '../../utils/assertions/auth.assert.js';
import { registerMetadata } from '../../utils/allure/auth.metadata.js';
import {
  registerUser,
  registerUserInvalidEmailFormat,
} from '../../data/factories/register.factory.js';

describe('Register API', () => {
  describe('Positive Scenarios', () => {
    test('REGISTER-001 : Return 201 when User Registers Successfully', async () => {
      await setTestMetadata(
        registerMetadata({
          testCaseId: 'REGISTER-001',
          story: 'Register with valid credentials',
          tags: ['Positive', 'Regression'],
          severity: 'critical',
          priority: 'high',
          description:
            'Verify that user can register successfully using valid credentials.',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );
      const request = registerUser();

      const response = await allureStep('Send Register Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.register(request);
        await attachJson('Request Headers', result.requestHeaders);
        await attachJson('Response Headers', result.headers);
        await attachJson('Response', result.body);

        return result;
      });

      await allureStep('Validate HTTP Status and Common Response', async () => {
        expectSuccessResponse(response, {
          status: 201,
          message: 'User registered successfully',
        });
      });

      await allureStep('Validate Register Response', async () => {
        expectRegisterSuccess(response, {
          id: response.body.data.id,
          name: request.name,
          email: request.email,
          role: 'user',
        });
      });
    });
  });

  describe('Negative Scenarios', () => {
    test('REGISTER-002 : Return 400 when User Registers Without Input Name', async () => {
      await setTestMetadata(
        registerMetadata({
          testCaseId: 'REGISTER-002',
          story: 'Register without input Name',
          tags: ['Negative', 'Smoke'],
          severity: 'critical',
          priority: 'high',
          description: 'Verify that user cannot register without input name.',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );
      const request = registerTestData.emptyName;

      const response = await allureStep('Send Register Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.register(request);
        await attachJson('Request Headers', result.requestHeaders);
        await attachJson('Response Headers', result.headers);
        await attachJson('Response', result.body);

        return result;
      });

      await allureStep('Validate HTTP Status and Common Response', async () => {
        expectErrorResponse(response, {
          status: 400,
          message: 'Name, email, and password are required',
        });
      });
    });

    test('REGISTER-003 : Return 400 when User Registers Without Input Email', async () => {
      await setTestMetadata(
        registerMetadata({
          testCaseId: 'REGISTER-003',
          story: 'Register without input Email',
          tags: ['Negative', 'Smoke'],
          severity: 'critical',
          priority: 'high',
          description: 'Verify that user cannot register without input Email.',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );
      const request = registerTestData.emptyEmail;

      const response = await allureStep('Send Register Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.register(request);
        await attachJson('Request Headers', result.requestHeaders);
        await attachJson('Response Headers', result.headers);
        await attachJson('Response', result.body);

        return result;
      });

      await allureStep('Validate HTTP Status and Common Response', async () => {
        expectErrorResponse(response, {
          status: 400,
          message: 'Name, email, and password are required',
        });
      });
    });

    test('REGISTER-004 : Return 400 when User Registers Without Input Password', async () => {
      await setTestMetadata(
        registerMetadata({
          testCaseId: 'REGISTER-004',
          story: 'Register without input Password',
          tags: ['Negative', 'Smoke'],
          severity: 'critical',
          priority: 'high',
          description:
            'Verify that user cannot register without input Password.',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );
      const request = registerTestData.emptyPassword;

      const response = await allureStep('Send Register Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.register(request);
        await attachJson('Request Headers', result.requestHeaders);
        await attachJson('Response Headers', result.headers);
        await attachJson('Response', result.body);

        return result;
      });

      await allureStep('Validate HTTP Status and Common Response', async () => {
        expectErrorResponse(response, {
          status: 400,
          message: 'Name, email, and password are required',
        });
      });
    });

    test('REGISTER-005 : Return 400 when User Registers With invalid format Email', async () => {
      await setTestMetadata(
        registerMetadata({
          testCaseId: 'REGISTER-005',
          story: 'Register with invalid format Email',
          tags: ['Negative', 'Smoke'],
          severity: 'critical',
          priority: 'high',
          description:
            'Verify that user cannot register with invalid format Email.',
          bugId: 'BUG-123',
          owner: 'Fairuz Hanif Rabbani',
        }),
      );
      const request = registerUserInvalidEmailFormat();

      const response = await allureStep('Send Register Request', async () => {
        await attachJson('Request', request);

        const result = await authAPI.register(request);
        await attachJson('Request Headers', result.requestHeaders);
        await attachJson('Response Headers', result.headers);
        await attachJson('Response', result.body);

        return result;
      });

      await allureStep('Validate HTTP Status and Common Response', async () => {
        expectErrorResponse(response, {
          status: 400,
          message: 'Invalid email',
        });
      });
    });
  });
});
