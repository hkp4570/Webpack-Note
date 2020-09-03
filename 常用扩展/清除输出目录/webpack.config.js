const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  output:{
    filename:'[name][hash:5].js'
  },
  plugins:[
    new CleanWebpackPlugin(),
  ]
}
