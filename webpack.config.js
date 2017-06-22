var path = require("path");

module.exports = {
  entry: "./client/js/enigma.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "client/js")
  }
};