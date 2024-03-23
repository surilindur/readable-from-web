process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      'index.js',
      'lib/*.js',
      'test/*.js',
    ],
    frameworks: [ 'mocha', 'chai' ],
    reporters: [ 'progress', 'coverage' ],
    preprocessors: {
      'lib/*.js': [ 'coverage' ],
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [ 'FirefoxHeadless', 'ChromeHeadless', 'Edge' ],
    singleRun: true,
    concurrency: Number.POSITIVE_INFINITY,
  });
};
