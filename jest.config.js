module.exports = {
  setupFiles: [
    '<rootDir>/test/enzyme.config.js',
  ],
  moduleNameMapper: {
    '\\.css': 'identity-obj-proxy',
  },
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'node',
  ],
};
