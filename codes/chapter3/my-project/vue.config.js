module.exports = {
  //开发模式反向代理配置，生产模式请使用Nginx部署并配置反向代理
  devServer: {
    port: 8888,
    proxy: {
      "/api": {
        //本地服务接口地址
        target: "http://10.200.1.200:8888", //开发环境下后端接口地址
        ws: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  }
};
