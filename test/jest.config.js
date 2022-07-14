module.exports = {
  rootDir: '../',
  testEnvironment: 'node',
  coverageProvider: 'v8',
  coverageReporters: [['json', {file: 'coverage-json.json'}], 'text'],
  coverageDirectory: 'build/coverage/',
  collectCoverageFrom: ['src/**/*.js'],
  verbose: true
};