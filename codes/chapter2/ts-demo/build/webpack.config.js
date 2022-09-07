const {CleanWebpackPlugin} = require('clean-webpack-plugin') //清除文件
const HtmlWebpackPlugin = require('html-webpack-plugin') //配置生成html文件
const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

//把一个路径或路径片段的序列解析为一个绝对路径
function resolve (dir) {
  return path.resolve(__dirname, '..', dir) 
}

module.exports = {
  mode: isProd ? 'production' : 'development', //模式，指定是生成模式还是开发模式
  entry: {
    app: './src/main.ts' //程序主入口文件
  },
  //输出配置
  output: {
    path: resolve('dist'), //指定打包后的文件存放目录
    filename: '[name].[contenthash:8].js' //指定打包后js文件的命名规则：app.八位哈希值.js
  },

  module: {
    rules: [
     //通过ts-loader对src目录下面的ts和tsx文件进行操作
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [resolve('src')]
      },
      // { test:/\.js$/ , use:"babel-loader",exclude:/node_modules/ } 
    ]
  },
  //插件配置
  plugins: [
    //先清除原有的打包目录(这里是配置的dist目录），再生成新的
    new CleanWebpackPlugin({}),

    new HtmlWebpackPlugin({
      template: './public/index.html' //指定生成html的模板文件路径
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js'] //在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在，这里可配置不需要写后缀名的数组列表
  },
  devtool: isProd ? false : 'source-map',
  //开发服务器配置
  devServer: {
    host: 'localhost', // 主机名
    stats: 'errors-only', // 打包日志输出输出错误信息
    port: 8888, //端口
    open: true //浏览器当中自动打开
  },
}
