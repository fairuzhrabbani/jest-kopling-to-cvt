export const expectSuccessResponse = (response, expected) => {
  expect(response.status).toBe(expected.status);

  expect(response.body).toHaveProperty('success', true);

  expect(response.body).toHaveProperty('message', expected.message);
};

export const expectErrorResponse = (response, expected) => {
  expect(response.status).toBe(expected.status);

  expect(response.body).toHaveProperty('success', false);

  expect(response.body).toHaveProperty('message', expected.message);
};
