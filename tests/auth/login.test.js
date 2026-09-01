import authAPI from '../../api/AuthAPI.js';
import { loginTestData } from '../../data/auth/login.data.js';

// describe the test suite for the Login API
describe('Positive Scenarios', () => {
  test('LOGIN-001 : Return 200 when Valid Credentials', async () => {
    //
    // const credentials = {
    //   email: 'admin@example.com',
    //   password: 'Password123',
    // };

    // request the login API using the AuthAPI class and the provided credentials
    const response = await authAPI.login(loginTestData.validCredentials);

    // Assertions to verify the response from the login API
    // expect the response status to be 200 (OK) and the response body to contain the expected properties
    expect(response.status).toBe(200);

    // expect the response body to have the expected properties, including success, message, accessToken, and user details
    expect(response.body).toHaveProperty('success', true);
    expect(response.body).toHaveProperty('message', 'Login successful');
    expect(response.body).toHaveProperty('data.accessToken');
    expect(response.body).toHaveProperty('data.user.id', 1);
    expect(response.body).toHaveProperty('data.user.name', 'Admin');
    expect(response.body).toHaveProperty(
      'data.user.email',
      'admin@example.com',
    );
  });
});

describe('Authentication Errors', () => {
  test('LOGIN-002 : Return 401 when Wrong Password', async () => {
    const response = await authAPI.login({
      email: 'fairuz@example.com',
      password: 'WrongPassword',
    });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('success', false);
    expect(response.body).toHaveProperty(
      'message',
      'Invalid email or password',
    );
  });

  test('LOGIN-003 : Return 401 when Email Not Found', async () => {
    const response = await authAPI.login({
      email: 'nonexistent@example.com',
      password: 'Password123',
    });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('success', false);
    expect(response.body).toHaveProperty(
      'message',
      'Invalid email or password',
    );
  });
});

describe('Validation Errors', () => {
  test('LOGIN-004 : Return 400 when Email is Empty', async () => {
    const response = await authAPI.login({
      email: '',
      password: 'Password123',
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('success', false);
    expect(response.body).toHaveProperty(
      'message',
      'Email and password are required',
    );
  });

  test('LOGIN-005 : Return 400 when Password is Empty', async () => {
    const response = await authAPI.login({
      email: 'fairuz@example.com',
      password: '',
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('success', false);
    expect(response.body).toHaveProperty(
      'message',
      'Email and password are required',
    );
  });

  test('LOGIN-006 : Return 401 when Email is Invalid Format', async () => {
    const response = await authAPI.login({
      email: 'invalid-email',
      password: 'Password123',
    });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('success', false);
    expect(response.body).toHaveProperty(
      'message',
      'Invalid email or password',
    );
  });

  test.skip('LOGIN-007 : Return 401 when Email is Invalid Format', async () => {
    const response = await authAPI.login({
      email: 'invalid-email',
      password: 'Password123',
    });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('success', false);
    expect(response.body).toHaveProperty(
      'message',
      'Invalid email or password',
    );
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
