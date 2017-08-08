var path = require('path');

module.exports = {
  entry: [
      './app/scripts/app.js'
  ],
  output: {
    path: path.resolve(__dirname, './temp/scripts'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
