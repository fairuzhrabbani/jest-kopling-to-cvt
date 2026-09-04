import { expect } from '@jest/globals';

export function expectUserInDatabase(user, expected) {
  expect(user).toBeDefined();

  expect(user.id).toBe(expected.id);
  expect(user.name).toBe(expected.name);
  expect(user.email).toBe(expected.email);
}
