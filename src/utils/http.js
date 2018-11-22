import axios from 'axios';
import { Message } from 'element-ui';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  
  // 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
	if(response.status=="200"){
		return response;
	}else{
		//请求失败
		return 
	}
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
 
 
axios.defaults.baseURL = baseUrl;
console.log("base_url="+baseUrl);
//设置默认请求头
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'token':''
}
axios.defaults.timeout = 10000
axios.defaults.responseType= 'json';
export default {
  //get请求
    get (url,param) {
      return new Promise((resolve,reject) => {
        axios({
          method: 'get',
          url,
          params: param
        }).then(res => {
          resolve(res)
        })
      })
    },
  //post请求
    post (url,param) {
      return new Promise((resolve,reject) => {
        axios({
          method: 'post',
          url,
          data: qs.stringify(param),
          headers:{
          	'Content-Type':'application/x-www-form-urlencoded'
          }
        }).then(res => {
          resolve(res)
        })
      })
     }
  }