// 导入处理路径的模块
const path = require("path");
// 导出一个配置对象
module.exports = {
    entry: path.join(__dirname, "./src/main.js"), // 项目入口文件
    output: { // 配置输出选项
        path: path.join(__dirname, "./dist"), // 配置输出的路径
        filename: "bundle.js" // 配置输出的文件名
    },
    mode: "development" // 模式配置
};
