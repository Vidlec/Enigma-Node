var path = require("path");

module.exports = {
  entry: "./client/js/components/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "client/js")
  },
  module:{
    loaders:[{loader:"babel-loader", exclude: /(node_modules|bower_components)/}]
  }
};