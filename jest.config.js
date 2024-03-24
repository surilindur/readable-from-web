/** @type {import('jest').Config} */
module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '^.+\\.js',
  ],
  testRegex: '^.+-test\\.ts$',
  moduleFileExtensions: [
    'js',
    'ts',
  ],
  collectCoverage: true,
  testEnvironment: 'node',
};
