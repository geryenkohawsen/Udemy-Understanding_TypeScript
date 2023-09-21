const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Tell webpack to test files with.ts extensions
        use: 'ts-loader', // Tell webpack to use TypeScript loader for the testing
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Tell webpack to look for.ts files
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
