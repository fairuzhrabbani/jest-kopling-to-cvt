export const expectLoginSuccess = (response, expected) => {
  expect(response.body).toHaveProperty('data.accessToken');

  expect(response.body).toHaveProperty('data.user.id', expected.user.id);

  expect(response.body).toHaveProperty('data.user.name', expected.user.name);

  expect(response.body).toHaveProperty('data.user.email', expected.user.email);
};

export const expectRegisterSuccess = (response, expected) => {
  expect(response.body).toHaveProperty('data.id', expected.id);

  expect(response.body.data.name.toLowerCase()).toBe(
    expected.name.toLowerCase(),
  );
  expect(response.body.data.email.toLowerCase()).toBe(
    expected.email.toLowerCase(),
  );
  // expect(response.body).toHaveProperty('data.name', expected.name);
  // expect(response.body).toHaveProperty('data.email', expected.email);

  expect(response.body).toHaveProperty('data.role', expected.role);
};
