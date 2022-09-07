import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '/api', // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
if (localStorage.getItem("$token") ) {
    // 让每个请求携带自定义token 请根据实际情况自行修改
      config.headers['X-Token'] = localStorage.getItem("$token") 
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)
// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.Status !== '200') {
      this.$message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      // 401:非法的token; 402:其他客户端登录了;  403:Token 过期了;
      if (res.Status === 401 || res.Status === 402 || res.Status === 403) {
        //退出登录操作
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    this.$message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service