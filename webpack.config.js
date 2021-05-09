// const path = require('path');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack.config.base')

module.exports = {
  ...base,
  devtool:'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  mode: "development", 
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  
}


