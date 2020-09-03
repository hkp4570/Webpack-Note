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
    filename:'scripts/[name][chunkhash:5].js'
  },
  module:{
    rules:[
      {
        test: /\.(jpg)|(png)|(gif)$/,
        use:[
          // {
          //   loader:'file-loader',
          //   options:{
          //     name:'imgs/[name].[hash:5].[ext]'
          //   }
          // },
          {
            loader:'url-loader',
            options:{
              // limit: false //不限制任何大小，所有经过loader的文件进行base64编码返回
              limit: 10 * 1024, //只要文件不超过 100*1024 字节，则使用base64编码，否则，交给file-loader进行处理
              name: "imgs/[name].[hash:5].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename: 'home.html',
      chunks: ['home'],  // 只是用一个chunk  一个页面使用一个js
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
