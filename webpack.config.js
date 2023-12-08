// Webpack uses this to work with directories
const path = require('path');

module.exports = {

  entry: './coffee-house/js/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          } 
    ]
  },

  mode: 'development'
};