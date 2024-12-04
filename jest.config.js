module.exports = {
  modulePaths: ['<rootDir>'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '@util/(.*)': '<rootDir>/workspaces/util/src/$1',
  },
};
