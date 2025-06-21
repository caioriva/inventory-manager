module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/__mocks__/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};
