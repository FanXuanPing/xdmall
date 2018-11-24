import axios from 'axios'
import {baseUrl} from "@/api"
import {getCookie} from '@/utils/cookie.js'
import { Message, Loading } from 'element-ui';
import qs from "qs"

// 添加请求拦截器

// axios.defaults.headers['cCode'] = localStorage.getItem('cCode');
axios.interceptors.request.use(config=>{
    // 在发送请求之前做些什么
		const token = getCookie('session');
		config.data=JSON.stringify(config.data);
		// config.headers.Authorization = `token ${token}`;
		config.headers={
			'Content-Type':'application/x-www-form-urlencoded' //设置跨域头部
		};
		if(token){
			config.params={'token':token};
			config.headers.Authorization=token;
		}
		
    return config;
  }, error=> {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  
  // 添加响应拦截器
axios.interceptors.response.use((response)=>{
    // 对响应数据做点什么
	if(response.status=="200"){
		return response;
	}else{
		//请求失败
		return 
	}
  }, error=> {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
 
 
axios.defaults.baseURL = baseUrl;
console.log("base_url="+baseUrl);
//设置默认请求头
axios.defaults.headers = {
		'Content-Type':'application/x-www-form-urlencoded',
};
axios.defaults.timeout = 10000
axios.defaults.responseType= 'json';

export default {
  //get请求
    get (url,param) {
      return new Promise((resolve,reject) => {
        axios({
          method: 'get',
          url,
          params: param,
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
          	'Content-Type':'application/x-www-form-urlencoded',
						// 'cCode':cCode
          }
        }).then(res => {
          resolve(res)
        })
      })
     },
		 
		 
		 
		 /**
			* 带自定义header的请求，
			*/
// 		 postAndHeader (url,param,header) {
// 	
// 		  var headers = $.extend({'Content-Type':'application/x-www-form-urlencoded'},header);
// 		 	return new Promise((resolve,reject) => {
// 		 		axios({
// 		 			method: 'post',
// 		 			url,
// 		 			data: qs.stringify(param),
// 		 			headers:headers
// 		 		}).then(res => {
// 		 			resolve(res)
// 		 		})
// 		 	})
// 		 }
  }
	
	
	
	