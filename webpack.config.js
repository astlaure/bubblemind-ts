const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/web/index.tsx',
  output: {
    filename: 'js/main.js',
    path: path.resolve('public'),
    publicPath: process.env.APP_URL,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  target: 'web',
  mode: 'development',
  module: {
    rules: [
      { test: /\.([tj])sx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.s?css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', { loader: 'sass-loader', options: { sourceMap: true } }] },
      { test: /\.(png|svg|jpe?g|gif)$/, type: 'asset/resource', generator: { filename: 'images/[name][ext][query]', }, },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/web/index.html',
      favicon: './src/web/favicon.ico',
    }),
  ],
  devtool: 'source-map',
};
