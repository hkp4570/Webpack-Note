const FileListPlugin = require('./plugins/fileListPlugin');

module.exports = {
  mode: 'development',
  devtool:'source-map',
  plugins:[
    new FileListPlugin(),
  ]
}
