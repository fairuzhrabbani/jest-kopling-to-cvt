import authAPI from '../../api/AuthAPI.js';

// describe the test suite for the Register API
describe('Register API', () => {
  test('REG-001 : Return 201 when Valid Registration', async () => {
    // Generate a unique email for the test user to avoid conflicts with existing users
    const userData = {
      name: 'Herman Test',
      email: `Herman${Date.now()}@test.com`,
      password: 'Password123',
    };

    // respond to the register API using the AuthAPI class and the provided user data
    const response = await authAPI.register(userData);

    // Assertions to verify the response from the register API
    // response status should be 201 (Created) and the response body should contain the expected properties
    expect(response.status).toBe(201);

    // expect the response body to have the expected properties, including success and message
    expect(response.body).toHaveProperty('success', true);
    expect(response.body).toHaveProperty(
      'message',
      'User registered successfully',
    );
  });
});

/* 
| Test    | Scenario           | Expected |
| ------- | ------------------ | -------: |
| REG-001 | Valid registration |      201 |
| REG-002 | Duplicate email    |      409 |
| REG-003 | Email kosong       |      400 |
| REG-004 | Password kosong    |      400 |
| REG-005 | Invalid email      |      400 |
| REG-006 | Missing name       |      400 |

*/
