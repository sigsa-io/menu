var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
    entry: `${SRC_DIR}/index.js`,
    output: {
      filename: 'bundle.js',
      path: DIST_DIR
    },
    module : {
      rules : [
        {
          test : /\.jsx?/,
          include : SRC_DIR,
          exclude: /node_modules/,
          loader : 'babel-loader',      
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      ]
    },
    mode: "development",
  };