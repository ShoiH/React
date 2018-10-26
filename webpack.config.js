const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',

  entry: './src/js/APP.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js/')
  },
  plugins: [
    new webpack.ProvidePlugin ({
        jQuery: "jquery",
        $: "jquery",
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
    }),
    new HtmlWebpackPlugin({
      teamplate: "./index.html",
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options:{
            presets: ['es2016','react']
          }
        }]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        include: [path.join(__dirname, "./src/css/"), path.join(__dirname, "./node_modules/react-datepicker/dist/")],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
/*             options: {
              url: false,
              minimize: true,
            } */
          },
          {
            loader : 'sass-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/style.css',
    })
  ]
};
