const path = require('node:path');

/** @type {import('webpack').Configuration} */
module.exports = {
  devServer: {
    port: 4000,
    host: 'localhost',
    static: path.resolve(__dirname),
    allowedHosts: 'all',
  },
  entry: {
    index: './lib/index.ts',
    streamtostring: 'stream-to-string',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/u,
        use: 'ts-loader',
        exclude: /node_modules/u,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    library: '[name]',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
