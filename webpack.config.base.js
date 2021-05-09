// const path = require('path');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { basename } = require('path');
module.exports = {
  
  entry: "./src/index.js", 
  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js", 
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'XDML',
    template: 'src/assets/index.html'
  })
],
module: {
    rules: [
        {
            test: /\.styl$/,
            use: [
                'style-loader' ,
                'css-loader',
                'stylus-loader' ,  
              ]
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
      {
        test: /\.less$/,
        use: [
            'style-loader' ,
            'css-loader',
            'less-loader' ,  
          ]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass")
            }
          }
        ]
      }
    ]
  }
  
}


