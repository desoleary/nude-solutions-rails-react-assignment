module.exports = {
  moduleDirectories: ['node_modules', 'app/assets/javascript'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$':
      '<rootDir>/app/javascript/internals/mocks/jest/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/app/javascript/internals/mocks/jest/image.js'
  },
  setupFiles: [
    '<rootDir>/app/javascript/internals/testing/support/setup-dom-and-globals.js',
    'jest-prop-type-error',
    '<rootDir>/app/javascript/internals/testing/test-helper.js'
  ],
  testMatch: ['app/javascript'].map((dir) => `**/${dir}/**/*.test.{js,jsx}`),
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: [
    'jest-extended',
    '<rootDir>/app/javascript/internals/testing/jest-matchers-ext.js'
  ],
  transformIgnorePatterns: ['node_modules/(?!(lodash-es|enzyme)/)']
};
