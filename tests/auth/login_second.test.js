import authAPI from '../../api/AuthAPI.js';
import { loginTestData } from '../../data/auth/login.data.js';

// describe the test suite for the Login API
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
});

/* 
| Test      | Scenario              | Expected |
| --------- | --------------------- | -------: |
| LOGIN-001 | Valid credentials     |      200 |
| LOGIN-002 | Wrong password        |      401 |
| LOGIN-003 | Email tidak terdaftar |      401 |
| LOGIN-004 | Email kosong          |      400 |
| LOGIN-005 | Password kosong       |      400 |
| LOGIN-006 | Email invalid format  |      401 |
| LOGIN-007 | Email invalid format  |      401 |

*/

/* 
test.skip() atau describe.skip() misalnya LOGIN-007 belum bisa dijalankan karena requirement backend masih belum final:
test.only() atau describe.skip() untuk debugging
*/
