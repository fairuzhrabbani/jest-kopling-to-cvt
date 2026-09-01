export const expectLoginError = (response, expectedStatus, expectedMessage) => {
  expect(response.status).toBe(expectedStatus);

  expect(response.body).toHaveProperty('success', false);

  expect(response.body).toHaveProperty('message', expectedMessage);
};
