export const expectLoginSuccess = (response, expected) => {
  expect(response.body).toHaveProperty('data.accessToken');

  expect(response.body).toHaveProperty('data.user.id', expected.user.id);

  expect(response.body).toHaveProperty('data.user.name', expected.user.name);

  expect(response.body).toHaveProperty('data.user.email', expected.user.email);
};
