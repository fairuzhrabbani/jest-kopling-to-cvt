import { expect } from '@jest/globals';

export function expectUserInDatabase(user, expected) {
  expect(user).toBeDefined();

  expect(user.name).toBe(expected.name);
  // expect(user.email).toBe(expected.email);
  expect(user.email.toLowerCase()).toBe(expected.email.toLowerCase());
  expect(user.role).toBe(expected.role);
}
