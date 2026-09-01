import request from '../utils/request.js';

/*
 * Health Check API Tests
 */
describe('Health Check API', () => {
  test('GET / should return 200', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      success: true,
      message: 'Backend API Store is running',
    });
  });
});
