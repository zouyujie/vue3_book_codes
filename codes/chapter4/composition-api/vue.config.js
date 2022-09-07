const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/*.scss')      //你的.scss文件所在目录
      ]
    }
  }
}