import authAPI from '../../api/AuthAPI.js';
import { registerTestData } from '../../data/auth/register.data.js';
import { setTestMetadata } from '../../utils/allure/allure.metadata.js';
import { allureStep } from '../../utils/allure/allure.step.js';
import { attachJson } from '../../utils/allure/allure.attachment.js';
import { expectSuccessResponse } from '../../utils/assertions/common.assert.js';
import { expectRegisterSuccess } from '../../utils/assertions/auth.assert.js';
import { loginMetadata } from '../../utils/allure/auth.metadata.js';

describe('Register API', () => {
  describe('Positive Scenarios', () => {
    test('REGISTER-001 : Return 201 when User Registers Successfully', async () => {
      await setTestMetadata(
        loginMetadata({
          story: 'Register with valid credentials',
          tags: ['Positive', 'Regression'],
          description:
            'Verify that user can register successfully using valid credentials.',
        }),
      );
      const request = registerTestData.validCredentials;

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
          name: registerTestData.validCredentials.name,
          email: registerTestData.validCredentials.email,
          role: 'user',
        });
      });
    });
  });
});
