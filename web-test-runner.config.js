const esbuildPlugin = require('@web/dev-server-esbuild').esbuildPlugin;

module.exports = {
  files: 'test/*-test.ts',
  concurrency: 1,
  nodeResolve: true,
  plugins: [ esbuildPlugin({ ts: true, target: 'es6' }) ],
};
