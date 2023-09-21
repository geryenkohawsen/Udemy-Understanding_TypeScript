const path = require('path');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },

  devtool: 'inline-source-map',
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
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
};
