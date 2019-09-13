const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './src/server/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build-server'),
  },
  externals: [webpackNodeExternals()], // excludes node modules in Webpack
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // we use url-loader as loader for webpack which transforms files into base64 URIs
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      // we use css-loader for handling css files
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
  optimization: {
    nodeEnv: 'development', // NODE_ENV
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      constants: path.resolve(__dirname, 'src/constants/'),
      blocks: path.resolve(__dirname, 'src/blocks/'),
      helpers: path.resolve(__dirname, 'src/helpers/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      api: path.resolve(__dirname, 'src/api/'),
    },
  },
};
