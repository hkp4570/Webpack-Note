const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DeepScope = require("webpack-deep-scope-plugin").default; // 真实项目不使用
const MiniCss = require("mini-css-extract-plugin");
const Purgecss = require("purgecss-webpack-plugin");
const path = require("path");
const globAll = require("glob-all"); // 匹配所有的文件进行对比
const srcAbs = path.resolve(__dirname, "src"); //得到src的绝对路径
const htmlPath = path.resolve(__dirname, "public/index.html");

const paths = globAll.sync([`${srcAbs}**/*.js`, htmlPath]);

module.exports = {
  mode: "production",
  module: {
    rules: [{ test: /\.css$/, use: [MiniCss.loader, "css-loader"] }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DeepScope(),
    new MiniCss(),
    new Purgecss({
      paths
    })
  ]
};
