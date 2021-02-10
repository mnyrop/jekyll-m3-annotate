const path = require('path');

module.exports = {
  entry: './js/index.js',
  mode: 'production',
  module: {
   rules: [
     {
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader',
       ],
     },
   ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/js/mirador/'),
    publicPath: 'assets/js/mirador/'
  },
};
