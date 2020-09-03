const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  HtmlWebpackPlugin  = require('html-webpack-plugin');


module.exports = {
  mode:'development',
  entry:{
    home: './src/index.js',
    a: './src/a.js'
  },
  output:{
    filename:'[name][hash:5].js'
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename: 'home.html',
      chunks: ['home'],  // 只是用一个chunk  一个页面使用一个js
    }),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename: 'a.html',
      chunks: ['a'],  // 只是用一个chunk  一个页面使用一个js
    }),
  ]
}
