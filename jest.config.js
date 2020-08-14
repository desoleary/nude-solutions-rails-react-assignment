module.exports = {
  moduleDirectories: ['node_modules', 'app/assets/javascript'],
  setupFiles: ['<rootDir>/app/javascript/internals/testing/test-helper.js'],
  testMatch: ['app/javascript'].map(
      (dir) => `**/${dir}/**/*.test.{js,jsx}`
  ),
  snapshotSerializers: ['enzyme-to-json/serializer']
}
