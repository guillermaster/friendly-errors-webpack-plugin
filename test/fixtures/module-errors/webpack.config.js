
const FriendlyErrorsWebpackPlugin = require('../../../index');

module.exports = {
  mode: 'production',
  entry: __dirname + "/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ]
};