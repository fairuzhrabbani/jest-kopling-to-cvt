import { faker } from '@faker-js/faker';

export const registerUser = () => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password({
    length: 12,
    memorable: false,
  }),
});

export const registerUserInvalidEmailFormat = () => ({
  name: faker.person.fullName(),
  email: 'invalid-format',
  password: faker.internet.password({
    length: 12,
    memorable: false,
  }),
});
