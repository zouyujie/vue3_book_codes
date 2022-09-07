// 导入处理路径的模块
const path = require("path");
const webpack = require("webpack");
// 导入自动生成HTMl文件的插件
const htmlWebpackPlugin = require("html-webpack-plugin");

// 导出一个配置对象
module.exports = {
  entry: path.join(__dirname, "./src/main.js"), // 项目入口文件
  // //多入口
  // entry:{
  //   home:path.join(__dirname,"./src/home.js"),
  //   index:path.join(__dirname,"./src/index.js")
  //  },   
  //  //特殊用法
  //  entry:{
  //   //数组中所有入口文件生成一个chunk，输出一个bundle文件，chunk的名称是key的名称other
  //   other:["./src/index.js","./src/home.js"],
  //  //生成一个chunk，输出一个bundle文件
  //   login:"./src/login.js"
  // },  
  output: {
    // 配置输出选项
    path: path.join(__dirname, "./dist"), // 配置输出的路径
    filename: "bundle.js", // 配置输出的文件名
    // filename:"[name].js" //对应多入口，多输出
  },
  mode: "development", // 模式配置
  module: {
    // 这个节点用于配置所有第三方模块加载器
    rules: [
      // 配置所有第三方模块的匹配规则
      //配置处理.css文件的第三方loader 规则
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      //配置处理.less文件的第三方loader 规则
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      //配置处理.scss文件的第三方loader 规则
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      //配置处理图片资源
      { 
        test: /\.(jpg|png|gif|bmp|jpeg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 //10kb
          }
        },
        generator: {
          filename: 'static/[hash].[ext]'
        }
      },
      //配置处理字体资源
      { test: /\.(ttf|eot|svg|woff|woff2)$/, type: 'asset/inline'}
    ],
  },
  plugins: [
     // 配置插件的节点
     new htmlWebpackPlugin({ // 创建一个在内存中生成HTML页面的插件
      template: path.join(__dirname, './src/index.html'), // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
      filename: 'index.html', // 指定生成的页面的名称
      //压缩HTML
      // minify:{
      //   //移除空格
      //   collapseWhitespace:true,
      //   //移除注释
      //   removeComments:true
      //   }
    }),
    // 配置插件的节点
    new webpack.HotModuleReplacementPlugin(), // new一个热更新的模块对象
  ],
  devServer: {
    // 这是配置 dev-server 命令参数的第二种方式
    // --open --port 3000 --hot --static-directory
    open: true, // 自动打开浏览器
    port: 3000, // 设置启动时候的运行端口
    hot: true, // 启用热更新
    static: {
      directory: path.join(__dirname, 'public'),
    }
  },
};
