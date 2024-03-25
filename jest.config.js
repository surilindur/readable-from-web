/** @type {import('jest').Config} */
module.exports = {
  collectCoverage: true,
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testRegex: [ 'test/?(.+)+test.[tj]s$' ],
  testEnvironment: 'node',
};
