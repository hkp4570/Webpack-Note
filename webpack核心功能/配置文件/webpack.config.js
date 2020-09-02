/**
 * 为什么不能使用es6模块导出，因为在构建时是运行在node环境中的
 * 构建过程中会运行此代码  src目录下的代码不会运行，所有可以使用不同的模块化
 * 如果模块中有错误，在打包（构建）时不会报错
 */
// console.log(window) // 报错

module.exports = {
  entry: './src/index.js',
  output:{
    filename:'bundle.js'
  }
}
