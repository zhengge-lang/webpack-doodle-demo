// const path = require('path');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack.config.base')

module.exports = {
  ...base,
  mode: "production", 
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
    ignoreOrder: false, // Enable to remove warnings about conflicting order
  })],
 
 
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  
}


