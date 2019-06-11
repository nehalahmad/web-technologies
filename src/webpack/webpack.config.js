// webpack config file is just basically a commonJS module
module.exports = {
  mode: "development",
  entry: ["./utils.js", "./app.js"],
  output: {
    filename: "bundle.js"
  },
  watch: true,
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: "node_modules",
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".es6"]
  }
};
