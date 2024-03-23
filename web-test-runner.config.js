import { esbuildPlugin } from '@web/dev-server-esbuild';

module.exports = {
  files: 'test/*-test.ts',
  concurrency: 1,
  nodeResolve: true,
  plugins: [ esbuildPlugin({ ts: true, target: 'es6' }) ],
};
