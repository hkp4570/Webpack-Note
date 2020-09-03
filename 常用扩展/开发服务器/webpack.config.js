const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  HtmlWebpackPlugin  = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
    new CopyPlugin({
      patterns: [
        { from: './public', to: './' },
      ],
    }),
  ],
  devServer:{
    port: 8000,
    open: true,
    index: 'index.html',
    proxy:{
      "/api":{
        target:'http://open.duyiedu.com',
        changeOrigin:true, // 更改请求头中的host和origin
      }
    }
  }
}
