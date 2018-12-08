import Vue from 'vue'
import Router from 'vue-router'
import api from '@/api/api'
import {getCookie} from '@/utils/cookie'

import Index from '@/pages/Index'
const Login = resolve => require(['@/pages/login'], resolve);     //登录界面
const Register = resolve => require(['@/pages/register'], resolve);//注册界面
const GoodsCar =resolve => require(['@/pages/goods/goodscar'],resolve);  //购物车界面
const GoodsList =resolve => require(['@/pages/goods/goodlist'],resolve); //商品页面




Vue.use(Router)

const router =  new Router({
	mode:'history',
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
			path: '/Goodscar', //购物车界面
			name: 'GoodsCar',
			component: GoodsCar,
		},
		{
			path: '/GoodList', //商品列表
			name: 'GoodList',
			component: GoodsList,
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
