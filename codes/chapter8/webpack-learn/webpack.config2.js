// 导入处理路径的模块
const path = require("path");
// 导入自动生成HTMl文件的插件
const htmlWebpackPlugin = require("html-webpack-plugin");

// 导出一个配置对象
module.exports = {
  //多入口
  entry:{
    vendor:[path.join(__dirname,"./src/js/date.js"),path.join(__dirname,"./src/js/common.js")],
    product:path.join(__dirname,"./src/js/product.js"),
    order:path.join(__dirname,"./src/js/order.js")
   },
  output: {
    // 配置输出选项
    path: path.join(__dirname, "./dist"), // 配置输出的路径
    filename:"[name].js" //对应多入口，多输出
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
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, //10kb
          },
        },
        generator: {
          filename: "static/[hash].[ext]",
        },
      },
      //配置处理字体资源
      { test: /\.(ttf|eot|svg|woff|woff2)$/, type: "asset/inline" },
    ],
  },
  plugins: [
    // 配置插件的节点
    new htmlWebpackPlugin({
      // 创建一个在内存中生成HTML页面的插件
      template: path.join(__dirname, "./src/views/product.html"), // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
      filename: "product.html", // 指定生成的页面的名称
      chunks: ["product", "vendor"],//加载顺序从右往左
      //压缩HTML
      minify: {
        //移除空格
        collapseWhitespace: true,
        //移除注释
        removeComments: true,
      },
    }),
    // 配置插件的节点
    new htmlWebpackPlugin({
      // 创建一个在内存中生成HTML页面的插件
      template: path.join(__dirname, "./src/views/order.html"), // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
      filename: "order.html", // 指定生成的页面的名称
      chunks: ["order", "vendor"],
    }),
  ],
  devServer: {
    // 这是配置 dev-server 命令参数的第二种方式
    // --open --port 3000 --hot --static-directory
    open: true, // 自动打开浏览器
    port: 3000, // 设置启动时候的运行端口
    hot: true, // 启用热更新
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
};
