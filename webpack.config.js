// https://webpack.js.org/concepts/configuration/

var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  devtool: 'source-map',
};
