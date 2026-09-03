export default {
  // testEnvironment: 'node',
  testEnvironment: 'allure-jest/node',

  roots: ['<rootDir>/tests'],

  testMatch: ['**/*.test.js'],

  verbose: true,

  clearMocks: true,

  transform: {},

  setupFiles: ['<rootDir>/config/setup.js'],
  // setupFilesAfterEnv: ['<rootDir>/utils/schemaMatcher.js'],
};
