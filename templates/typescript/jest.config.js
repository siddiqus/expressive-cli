module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '__utils__\\.test\\.[jt]s$',
    'config/test.ts',
  ],
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsConfig: './tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    '@config': '<rootDir>/config',
    '@eloan/(.*)': '<rootDir>/src/$1',
  },
};
