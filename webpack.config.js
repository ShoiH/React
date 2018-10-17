const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  mode: 'development',

  entry: './src/js/APP.js',

  output: {
    path: path.resolve(__dirname, 'dist/js/'),
    filename: 'bundle.js'
  },

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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              minimize: true,
            }
          },
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
