// Webpack uses this to work with directories
const path = require('path');

module.exports = {

  entry: './coffee-house/js/index.js',

  output: {
    path: path.resolve(__dirname, 'coffee-house/js'),
    publicPath: '',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
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
          },
      //     {
      //       test: /\.js$/,
      //       enforce: "pre",
      //       use: [
      //         {
      //           loader: "source-map-loader",
      //           options: {
      //             filterSourceMappingUrl: (url, resourcePath) => {
      //               if (/broker-source-map-url\.js$/i.test(url)) {
      //                 return false;
      //               }
      //
      //               if (/keep-source-mapping-url\.js$/i.test(resourcePath)) {
      //                 return "skip";
      //               }
      //
      //               return true;
      //             },
      //           },
      //         },
      //       ],
      // },
    ]
  },

  mode: 'development'
};
