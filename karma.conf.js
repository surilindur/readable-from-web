module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      'index.js',
      'lib/*.js',
      'test/*.js',
    ],
    frameworks: [ 'mocha', 'chai', 'karma-typescript' ],
    reporters: [ 'progress', 'karma-typescript' ],
    preprocessors: {
      'lib/*.ts': [ 'karma-typescript' ],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [ 'firefox', 'chrome', 'edge' ],
    singleRun: true,
    concurrency: Number.POSITIVE_INFINITY,
  });
};
