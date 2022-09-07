import axios from 'axios';
import { ElMessage } from 'element-plus'
import router from '@/router'

//默认超时时间
axios.defaults.timeout =100000; //10s
axios.defaults.baseURL = '/api'; //默认请求前缀
//模拟token
function getToken(){
    return 'test';
}
let clock:any = null;
//http request拦截
axios.interceptors.request.use(config => {
    //让每个请求携带token
    if (getToken()) {
        config.headers['tokenHeader'] = 'bearer ' + getToken();
    }
    //headers中配置text请求
    // if (config.text === true) {
    //   config.headers["Content-Type"] = "text/plain";
    // }
    return config
  }, error => {
    return Promise.reject(error)
  });
  //http response 拦截
  axios.interceptors.response.use(res => {
    //获取状态码
    const status:number=res.data.code;
    const msg:any = res.data.msg ||'未知错误';
    //如果是401则跳转到登录页面
    if (status === 401) {
      //限定时间内只能执行一次
      if (!clock) {
        ElMessage.error(msg);
      }
      clock = setTimeout(() => {
        clock = null;
      }, 2000);
      //退出登录
      router.push({ path: '/login' })
    } else {
      // 如果响应状态码不等于200 ，统一进行错误处理
      if (status !== 200) {
        ElMessage.error(msg);
        return Promise.reject(new Error(msg));
      }
    }
    return res;
  }, error => {
    return Promise.reject(new Error(error));
  });
  
  export default axios;