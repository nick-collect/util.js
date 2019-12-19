var nodeExternals = require('webpack-node-externals');
var path  = require('path')
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  target: 'node',
  mode: 'development',
  devtool: "inline-cheap-module-source-map",
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  resolve: {
    alias: {
      '@': resolve('src/')
    }
  },
  externals: [nodeExternals()]
};
