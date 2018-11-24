import Vue from 'vue'
import Router from 'vue-router'
import api from '@/api/api'
import {getCookie} from '@/utils/cookie'

import Index from '@/pages/Index'
const Login = resolve => require(['@/pages/login'], resolve);
const Register = resolve => require(['@/pages/register'], resolve);





Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/', //首页
      name: 'Index',
      component: Index
    },
		{
			path: '/Login', //登录
			name: 'Login',
			component: Login,
			   //验证token是否登录
		},
		{
			path: '/Register', //注册
			name: 'Register',
			component: Register,
			meta:{requireAuth:true}
		},
		{
			path: '/', //首页
			name: 'Index',
			component: Index,
			
		}
  ]
})




router.beforeEach((to, from, next) => { 
 if (to.meta.requireAuth) { // 验证是否需要登陆 
			if (getCookie('session')) { // 查询本地存储信息是否已经登陆
				next(); 
			}else{ 
			 next({ 
				path: '/Login', // 未登录则跳转至login页面 
				query: {redirect: to.fullPath} // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面 
				}); 
			} 
 }else{ 
		next(); 
 } 

});

export default router;
